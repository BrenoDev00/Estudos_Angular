import { Component, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectFieldComponent } from '../select-field/select-field.component';
import { ButtonComponent } from '../button/button.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { FormValuesInterface } from './form-values.type';

@Component({
  selector: 'app-transaction-form',
  imports: [
    SelectFieldComponent,
    ButtonComponent,
    InputFieldComponent,
    FormsModule,
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent {
  formValues: FormValuesInterface = {
    transactionType: '',
    transactionValue: '',
  };

  createdTransaction: OutputEmitterRef<void> = output<void>();

  onSubmit() {
    this.createdTransaction.emit();

    this.formValues.transactionType = '';
    this.formValues.transactionValue = '';
  }
}
