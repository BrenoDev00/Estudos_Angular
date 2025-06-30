import { Component, input, InputSignal } from '@angular/core';
import { TransactionInfoComponent } from './transaction-info/transaction-info.component';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-statement',
  imports: [TransactionInfoComponent],
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.css',
})
export class StatementComponent {
  transactions: InputSignal<Transaction[]> = input.required<Transaction[]>();
}
