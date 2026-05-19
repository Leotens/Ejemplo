import { computed, Signal, signal } from '@angular/core';
import {Rental} from '../domain/model/rental.entity';
import {Incident} from '../domain/model/incident.entity';
import {OperationsApi} from '../infrastructure/operations-api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { retry } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OperationsStore {
  private readonly rentalsSignal = signal<Rental[]>([]);
  private readonly incidentsSignal = signal<Incident[]>([]);

  readonly rentals = this.rentalsSignal.asReadonly();
  readonly incidents = this.incidentsSignal.asReadonly();

  private readonly loadingSignal = signal<boolean>(false);
  readonly loading = this.loadingSignal.asReadonly();

  private readonly errorSignal = signal<string | null>(null);
  readonly error = this.errorSignal.asReadonly();

  readonly rentalCount = computed(() => this.rentals().length);
  readonly incidentCount = computed(() => this.incidents().length);

  constructor(private operationsApi: OperationsApi) {
    this.loadRentals();
    this.loadIncidents();
  }

  getRentalById(id: number | null | undefined): Signal<Rental | undefined> {
    return computed(() => (id ? this.rentals().find((c) => c.id === id) : undefined));
  }

  hasActiveRentalForVehicle(vehicleId: number): boolean {
    return this.rentals().some(
      (rental) => rental.vehicleId === vehicleId && rental.status === 'ACTIVE',
    );
  }

  createRentalContract(
    vehicleId: number,
    clientId: number,
    durationDays: number,
    dailyRate: number,
  ): void {
    if (this.hasActiveRentalForVehicle(vehicleId)) {
      this.errorSignal.set('Vehicle already has an active rental');
      return;
    }

    const startDate = new Date();
    const endDate = this.calculateEndDate(startDate, durationDays);
    const totalCost = this.calculateTotalCost(durationDays, dailyRate);

    const rental = new Rental({
      id: 0,
      vehicleId,
      clientId,
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      durationDays,
      totalCost,
      status: 'ACTIVE',
    });

    this.loadingSignal.set(true);
    this.errorSignal.set(null);

    this.operationsApi.createRental(rental).subscribe({
      next: (createdRental) => {
        this.rentalsSignal.update((rentals) => [...rentals, createdRental]);
        this.createCleaningIncidentForRental(createdRental);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to create rental'));
        this.loadingSignal.set(false);
      },
    });
  }

  private createCleaningIncidentForRental(rental: Rental): void {
    const incident = new Incident({
      id: 0,
      vehicleId: rental.vehicleId,
      rentalId: rental.id,
      incidentType: 'CLEANING',
      registeredAt: new Date().toISOString(),
      estimatedRepairCost: 50,
      priority: 'NORMAL',
    });

    this.operationsApi.createIncident(incident).subscribe({
      next: (createdIncident) => {
        this.incidentsSignal.update((incidents) => [...incidents, createdIncident]);
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set(this.formatError(err, 'Failed to create cleaning incident'));
        this.loadingSignal.set(false);
      },
    });
  }

  private calculateTotalCost(durationDays: number, dailyRate: number): number {
    return durationDays * dailyRate;
  }

  private calculateEndDate(startDate: Date, durationDays: number): Date {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + durationDays);
    return endDate;
  }

  addRental(rental: Rental): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.operationsApi
      .createRental(rental)
      .pipe(retry(2))
      .subscribe({
        next: (createdRental) => {
          this.rentalsSignal.update((rentals) => [...rentals, createdRental]);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(this.formatError(err, 'Failed to create rental'));
          this.loadingSignal.set(false);
        },
      });
  }

  updateRental(updatedRental: Rental): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.operationsApi
      .updateRental(updatedRental)
      .pipe(retry(2))
      .subscribe({
        next: (rental) => {
          this.rentalsSignal.update((rentals) =>
            rentals.map((c) => (c.id === rental.id ? rental : c)),
          );
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(this.formatError(err, 'Failed to update rental'));
          this.loadingSignal.set(false);
        },
      });
  }

  deleteRental(id: number): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.operationsApi
      .deleteRental(id)
      .pipe(retry(2))
      .subscribe({
        next: () => {
          this.rentalsSignal.update((rentals) => rentals.filter((c) => c.id !== id));
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(this.formatError(err, 'Failed to delete rental'));
          this.loadingSignal.set(false);
        },
      });
  }

  addIncident(incident: Incident): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.operationsApi
      .createIncident(incident)
      .pipe(retry(2))
      .subscribe({
        next: (createdIncident) => {
          this.incidentsSignal.update((incidents) => [...incidents, createdIncident]);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(this.formatError(err, 'Failed to create incident'));
          this.loadingSignal.set(false);
        },
      });
  }

  updateIncident(updatedIncident: Incident): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.operationsApi
      .updateIncident(updatedIncident)
      .pipe(retry(2))
      .subscribe({
        next: (incident) => {
          this.incidentsSignal.update((incidents) =>
            incidents.map((c) => (c.id === incident.id ? incident : c)),
          );
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(this.formatError(err, 'Failed to update incident'));
          this.loadingSignal.set(false);
        },
      });
  }

  deleteIncident(id: number): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.operationsApi
      .deleteIncident(id)
      .pipe(retry(2))
      .subscribe({
        next: () => {
          this.incidentsSignal.update((incidents) => incidents.filter((c) => c.id !== id));
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(this.formatError(err, 'Failed to delete incident'));
          this.loadingSignal.set(false);
        },
      });
  }

  private loadRentals(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.operationsApi
      .getRentals()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (rentals) => {
          console.log(rentals);
          this.rentalsSignal.set(rentals);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(this.formatError(err, 'Failed to load rentals'));
          this.loadingSignal.set(false);
        },
      });
  }

  private loadIncidents(): void {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.operationsApi
      .getIncidents()
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: (incidents) => {
          this.incidentsSignal.set(incidents);
          this.loadingSignal.set(false);
        },
        error: (err) => {
          this.errorSignal.set(this.formatError(err, 'Failed to load incidents'));
          this.loadingSignal.set(false);
        },
      });
  }

  private formatError(error: any, fallback: string): string {
    if (error instanceof Error) {
      return error.message.includes('Resource not found')
        ? `${fallback}: Not found`
        : error.message;
    }
    return fallback;
  }
}
