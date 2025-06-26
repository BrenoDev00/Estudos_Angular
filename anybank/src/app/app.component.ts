import {
  Component,
  signal,
  WritableSignal,
  computed,
  Signal,
} from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { Transaction } from './models/transaction';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, TransactionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  transactionList: WritableSignal<Transaction[]> = signal<Transaction[]>([]);

  balance: Signal<number> = computed(() => {
    return this.transactionList().reduce((acc, currentTransaction) => {
      return acc + currentTransaction.transactionValue;
    }, 0);
  });

  processTransaction(transaction: Transaction): void {
    this.transactionList.update((currentList) => [transaction, ...currentList]);
  }
}
