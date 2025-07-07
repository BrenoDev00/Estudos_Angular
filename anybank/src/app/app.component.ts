import {
  Component,
  signal,
  WritableSignal,
  computed,
  Signal,
} from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { StatementComponent } from './components/statement/statement.component';
import { Transaction } from './models/transaction';
import { TransactionTypeEnum } from './types/models/transaction.type';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, TransactionFormComponent, StatementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  transactionList: WritableSignal<Transaction[]> = signal<Transaction[]>([]);

  balance: Signal<number> = computed(() => {
    return this.transactionList().reduce((acc, currentTransaction) => {
      if (currentTransaction.transactionType === TransactionTypeEnum.Deposito) {
        return acc + currentTransaction.transactionValue;
      }

      return acc - currentTransaction.transactionValue;
    }, 0);
  });

  handleNegativeBalance(transaction: Transaction): boolean {
    const currentBalance = this.balance();

    if (
      transaction.transactionValue > currentBalance &&
      transaction.transactionType === TransactionTypeEnum.Saque
    ) {
      return false;
    }

    return true;
  }

  processTransaction(transaction: Transaction): void {
    if (this.handleNegativeBalance(transaction)) {
      this.transactionList.update((currentList) => [
        transaction,
        ...currentList,
      ]);
    }
  }
}
