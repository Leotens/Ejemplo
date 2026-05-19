import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-vehicle-type-stats-card',
  imports: [CurrencyPipe, MatCardModule, TranslatePipe],
  templateUrl: './vehicle-type-stats-card.html',
  styleUrl: './vehicle-type-stats-card.css',
})
export class VehicleTypeStatsCard {
  vehicleType = input.required<string>();
  dailyRevenuePotential = input.required<number>();
  estimatedIncidentCost = input.required<number>();
  vehiclesRented = input.required<number>();
}
