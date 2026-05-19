import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { RentalForm } from '../../components/rental-form/rental-form';

@Component({
  selector: 'app-new-rental',
  imports: [RentalForm, TranslatePipe],
  templateUrl: './new-rental.html',
  styleUrl: './new-rental.css',
})
export class NewRental {}
