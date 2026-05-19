import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import  {VehicleTypeStatsGrid} from '../../../../masters/presentation/components/vehicle-type-stats-grid/vehicle-type-stats-grid';
import {NextUrgentIncidentCard} from '../../../../operations/presentation/components/next-urgent-incident-card/next-urgent-incident-card';

@Component({
  selector: 'app-home',
  imports: [NextUrgentIncidentCard, TranslatePipe, VehicleTypeStatsGrid],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
