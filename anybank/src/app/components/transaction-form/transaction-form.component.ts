import {
  Component,
  output,
  input,
  signal,
  WritableSignal,
  OutputEmitterRef,
  InputSignal,
  inject,
} from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { SelectFieldComponent } from '../select-field/select-field.component';
import { ButtonComponent } from '../button/button.component';
import { InputFieldComponent } from '../input-field/input-field.component';
import { Transaction } from '../../models/transaction';
import { TransactionTypeEnum } from '../../types/models/transaction.type';
import { ModalComponent } from '../modal/modal.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-transaction-form',
  imports: [
    SelectFieldComponent,
    ButtonComponent,
    InputFieldComponent,
    ModalComponent,
    ReactiveFormsModule,
    ErrorMessageComponent,
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent {
  private formBuilder = inject(FormBuilder);

  transactionForm = this.formBuilder.group({
    transactionType: ['', [Validators.required]],
    transactionValue: ['', [Validators.required]],
  });

  currentBalance: InputSignal<number> = input.required<number>();

  createdTransaction: OutputEmitterRef<Transaction> = output<Transaction>();

  isSuccessModalOpen: WritableSignal<boolean> = signal<boolean>(false);

  isErrorModalOpen: WritableSignal<boolean> = signal<boolean>(false);

  handleModalAppear(transaction: Transaction): void {
    if (
      transaction.transactionType == 'Saque' &&
      transaction.transactionValue > this.currentBalance()
    ) {
      this.isErrorModalOpen.set(true);
      return;
    }

    this.isSuccessModalOpen.set(true);
  }

  onSubmit(): void {
    if (this.transactionForm.invalid) {
      this.transactionForm.markAllAsTouched();
      return;
    }

    const transaction = new Transaction(
      this.transactionForm.value.transactionType as TransactionTypeEnum,
      Number(this.transactionForm.value.transactionValue)
    );

    this.handleModalAppear(transaction);

    this.createdTransaction.emit(transaction);

    this.transactionForm.reset();

    this.transactionForm.patchValue({
      transactionType: '',
      transactionValue: '',
    });
  }
}
