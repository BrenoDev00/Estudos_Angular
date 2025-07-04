import { nanoid } from 'nanoid';

export class Conta {
  public readonly id: string = nanoid();

  constructor(public readonly banco: string, public readonly saldo: number) {}
}
