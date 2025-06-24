import { Component } from '@angular/core';
import { SelectFieldComponent } from '../select-field/select-field.component';

@Component({
  selector: 'app-transaction-form',
  imports: [SelectFieldComponent],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent {}
