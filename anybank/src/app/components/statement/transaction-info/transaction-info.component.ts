import { Component, input, InputSignal } from '@angular/core';
import { Transaction } from '../../../models/transaction';
import { CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transaction-info',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transaction-info.component.html',
  styleUrl: './transaction-info.component.css',
})
export class TransactionInfoComponent {
  transaction: InputSignal<Transaction> = input.required<Transaction>();

}
