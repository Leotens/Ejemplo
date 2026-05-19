import { DatePipe, CurrencyPipe } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';
import { OperationsStore } from '../../../application/operations-store';

@Component({
  selector: 'app-next-urgent-incident-card',
  imports: [CurrencyPipe, DatePipe, MatCardModule, TranslatePipe],
  templateUrl: './next-urgent-incident-card.html',
  styleUrl: './next-urgent-incident-card.css',
})
export class NextUrgentIncidentCard {
  private readonly operationsStore = inject(OperationsStore);

  readonly incident = computed(
    () =>
      this.operationsStore
        .incidents()
        .filter((incident) => incident.priority === 'NORMAL')
        .sort((a, b) => new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime())[0],
  );
}
