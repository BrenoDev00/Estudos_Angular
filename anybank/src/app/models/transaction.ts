import {
  TransactionInterface,
  TransactionTypeEnum,
} from '../types/models/transaction.type';
import { v4 as uuid } from 'uuid';

export class Transaction implements TransactionInterface {
  public readonly transactionType: TransactionTypeEnum;
  public readonly transactionValue: number;
  public readonly transactionDate: Date = new Date();
  public readonly id: string = uuid();

  constructor(transactionType: TransactionTypeEnum, transactionValue: number) {
    this.transactionType = transactionType;
    this.transactionValue = transactionValue;
  }
}
