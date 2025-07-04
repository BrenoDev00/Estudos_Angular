import { Component, signal } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../../compartilhados/transacao.model';
@Component({
  selector: 'app-botao-adicionar-transacao',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-transacao.component.html',
  styleUrl: './botao-adicionar-transacao.component.css',
})
export class BotaoAdicionarTransacaoComponent {
  modalAberto = signal<boolean>(false);

  novaTransacaoForm = {
    nome: '',
    tipo: '',
    valor: '',
    data: '',
    conta: '',
  };

  abrirModal(): void {
    this.modalAberto.set(true);
  }

  aoSubmeter(): void {
    const transacao = new Transacao(
      this.novaTransacaoForm.nome,
      this.novaTransacaoForm.tipo as TipoTransacao,
      Number(this.novaTransacaoForm.valor),
      this.novaTransacaoForm.data,
      this.novaTransacaoForm.conta
    );
  }
}
