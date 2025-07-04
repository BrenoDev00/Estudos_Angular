import { Component, output, signal } from '@angular/core';
import { BotaoComponent } from '../../../compartilhados/botao/botao.component';
import { ModalComponent } from '../../../compartilhados/modal/modal.component';
import { FormsModule } from '@angular/forms';
import { Conta } from '../../compartilhados/conta.model';
@Component({
  selector: 'app-botao-adicionar-conta',
  imports: [BotaoComponent, ModalComponent, FormsModule],
  templateUrl: './botao-adicionar-conta.component.html',
  styleUrl: './botao-adicionar-conta.component.css',
})
export class BotaoAdicionarContaComponent {
  modalAberto = signal<boolean>(false);

  novaContaForm = {
    banco: '',
    saldo: '',
  };

  novaConta = output<Conta>();

  abrirModal(): void {
    this.modalAberto.set(true);
  }

  aoSubmeter(): void {
    const conta = new Conta(
      this.novaContaForm.banco,
      Number(this.novaContaForm.saldo)
    );

    this.novaConta.emit(conta);
    this.modalAberto.set(false);

    this.novaContaForm.banco = '';
    this.novaContaForm.saldo = '';
  }
}
