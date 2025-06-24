import { Component } from '@angular/core';
import { SelectFieldComponent } from '../select-field/select-field.component';
import { ButtonComponent } from '../button/button.component';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-transaction-form',
  imports: [SelectFieldComponent, ButtonComponent, InputFieldComponent],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent {}
