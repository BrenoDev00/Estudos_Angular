import { Component, signal, WritableSignal } from '@angular/core';
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

  processTransaction(transaction: Transaction): void {
    this.transactionList.update((currentList) => [transaction, ...currentList]);
    console.log(this.transactionList());
  }
}
