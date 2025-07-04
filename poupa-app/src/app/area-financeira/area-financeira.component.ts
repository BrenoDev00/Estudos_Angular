import { Component, signal, computed } from '@angular/core';
import { SaldoComponent } from './saldo/saldo.component';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { ContasComponent } from './contas/contas.component';
import { Conta } from './compartilhados/conta.model';
import { Transacao } from './compartilhados/transacao.model';

@Component({
  selector: 'app-area-financeira',
  imports: [SaldoComponent, TransacoesComponent, ContasComponent],
  templateUrl: './area-financeira.component.html',
  styleUrl: './area-financeira.component.css',
})
export class AreaFinanceiraComponent {
  saldo = 0;

  transacoes = signal<Transacao[]>([]);

  contas: Conta[] = [
    {
      nome: 'Anybank',
      saldo: 1000,
    },
    {
      nome: 'Bytebank',
      saldo: 0,
    },
    {
      nome: 'Switch Bank',
      saldo: 0,
    },
  ];

  processaTransacao(novaTransacao: Transacao): void {
    this.transacoes.update((listaAtual) => [novaTransacao, ...listaAtual]);
  }
}
