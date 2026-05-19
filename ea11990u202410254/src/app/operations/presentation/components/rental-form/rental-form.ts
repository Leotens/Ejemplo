import { Component, computed, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe } from '@ngx-translate/core';
import { MastersStore } from '../../../../masters/application/masters-store';
import { OperationsStore } from '../../../application/operations-store';

@Component({
  selector: 'app-rental-form',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslatePipe,
  ],
  templateUrl: './rental-form.html',
  styleUrl: './rental-form.css',
})
export class RentalForm {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);
  private readonly mastersStore = inject(MastersStore);
  private readonly operationsStore = inject(OperationsStore);

  readonly availableVehicles = computed(() =>
    this.mastersStore
      .vehicles()
      .filter(
        (vehicle) =>
          vehicle.status === 'AVAILABLE' &&
          !this.operationsStore.hasActiveRentalForVehicle(vehicle.id),
      ),
  );
  readonly form = this.formBuilder.group({
    vehicleId: [null as number | null, Validators.required],
    clientId: [null as number | null, [Validators.required, Validators.min(1)]],
    durationDays: [null as number | null, [Validators.required, Validators.min(1)]],
  });

  onCreate(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const vehicleId = this.form.value.vehicleId;
    const clientId = this.form.value.clientId;
    const durationDays = this.form.value.durationDays;

    if (!vehicleId || !clientId || !durationDays) {
      return;
    }

    const selectedVehicle = this.mastersStore
      .vehicles()
      .find((vehicle) => vehicle.id === vehicleId);

    if (!selectedVehicle) {
      return;
    }

    this.operationsStore.createRentalContract(
      vehicleId,
      clientId,
      durationDays,
      selectedVehicle.dailyRate,
    );

    selectedVehicle.status = 'RENTED';
    this.mastersStore.updateVehicle(selectedVehicle);
    this.router.navigateByUrl('/home');
  }

  onCancel(): void {
    this.router.navigateByUrl('/home');
  }
}
