import { Component, computed, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { OperationsStore } from '../../../../operations/application/operations-store';
import { MastersStore } from '../../../application/masters-store';
import { VehicleTypeStatsCard } from '../vehicle-type-stats-card/vehicle-type-stats-card';

@Component({
  selector: 'app-vehicle-type-stats-grid',
  imports: [MatGridListModule, VehicleTypeStatsCard],
  templateUrl: './vehicle-type-stats-grid.html',
  styleUrl: './vehicle-type-stats-grid.css',
})
export class VehicleTypeStatsGrid {
  private readonly mastersStore = inject(MastersStore);
  private readonly operationsStore = inject(OperationsStore);

  readonly stats = computed(() => {
    const vehicles = this.mastersStore.vehicles();
    const incidents = this.operationsStore.incidents();
    const vehicleTypes = [...new Set(vehicles.map((vehicle) => vehicle.vehicleType))];

    return vehicleTypes.map((vehicleType) => {
      const vehiclesByType = vehicles.filter((vehicle) => vehicle.vehicleType === vehicleType);
      const rentedVehicles = vehiclesByType.filter((vehicle) => vehicle.status === 'RENTED');
      const vehicleIds = vehiclesByType.map((vehicle) => vehicle.id);

      const estimatedIncidentCost = incidents
        .filter((incident) => vehicleIds.includes(incident.vehicleId))
        .reduce((total, incident) => {
          const priorityFactor = incident.priority === 'HIGH' ? 2 : 1;
          return total + incident.estimatedRepairCost * priorityFactor;
        }, 0);

      return {
        vehicleType,
        dailyRevenuePotential: rentedVehicles.reduce(
          (total, vehicle) => total + vehicle.dailyRate,
          0,
        ),
        estimatedIncidentCost: Math.round(estimatedIncidentCost * 100) / 100,
        vehiclesRented: rentedVehicles.length,
      };
    });
  });
}
