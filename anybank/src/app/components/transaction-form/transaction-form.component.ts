import {
  Component,
  output,
  input,
  signal,
  WritableSignal,
  OutputEmitterRef,
  InputSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectFieldComponent } from '../select-field/select-field.component';
import { ButtonComponent } from '../button/button.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { Transaction } from '../../models/transaction';
import { TransactionTypeEnum } from '../../types/models/transaction.type';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-transaction-form',
  imports: [
    SelectFieldComponent,
    ButtonComponent,
    InputFieldComponent,
    ModalComponent,
    FormsModule,
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent {
  formValues = {
    transactionType: '',
    transactionValue: '',
  };

  currentBalance: InputSignal<number> = input.required<number>();

  createdTransaction: OutputEmitterRef<Transaction> = output<Transaction>();

  isSuccessModalOpen: WritableSignal<boolean> = signal<boolean>(false);

  isErrorModalOpen: WritableSignal<boolean> = signal<boolean>(false);

  handleModalAppear(transaction: Transaction): void {
    if (
      transaction.transactionType == 'Saque' &&
      transaction.transactionValue > this.currentBalance()
    ) {
      return this.isErrorModalOpen.set(true);
    }

    return this.isSuccessModalOpen.set(true);
  }

  onSubmit(): void {
    const transaction = new Transaction(
      this.formValues.transactionType as TransactionTypeEnum,
      Number(this.formValues.transactionValue)
    );

    this.handleModalAppear(transaction);

    this.createdTransaction.emit(transaction);

    this.formValues.transactionType = '';
    this.formValues.transactionValue = '';
  }
}
