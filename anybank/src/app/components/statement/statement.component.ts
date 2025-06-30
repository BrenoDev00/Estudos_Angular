import { Component } from '@angular/core';
import { TransactionInfoComponent } from './transaction-info/transaction-info.component';

@Component({
  selector: 'app-statement',
  imports: [TransactionInfoComponent],
  templateUrl: './statement.component.html',
  styleUrl: './statement.component.css',
})
export class StatementComponent {}
