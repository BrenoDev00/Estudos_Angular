import {
  TransactionInterface,
  TransactionTypeEnum,
} from '../types/models/transaction.type';

export class Transaction implements TransactionInterface {
  public readonly transactionType: TransactionTypeEnum;
  public readonly transactionValue: number;

  constructor(transactionType: TransactionTypeEnum, transactionValue: number) {
    this.transactionType = transactionType;
    this.transactionValue = transactionValue;
  }
}
