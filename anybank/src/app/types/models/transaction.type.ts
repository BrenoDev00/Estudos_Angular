export enum TransactionTypeEnum {
  Deposito = 'Depósito',
  Saque = 'Saque',
}

export interface TransactionInterface {
  transactionType: TransactionTypeEnum;
  transactionValue: number;
}
