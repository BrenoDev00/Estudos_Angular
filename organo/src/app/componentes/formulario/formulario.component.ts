import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  OnInit,
  output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { GeneroLiterario, Livro } from '../livro/livro';
import { CampoTextoComponent } from '../campo-texto/campo-texto.component';
import { ListaSuspensaComponent } from '../lista-suspensa/lista-suspensa.component';
import { BotaoComponent } from '../botao/botao.component';
import { DivisorComponent } from '../divisor/divisor.component';
import { TituloComponent } from '../titulo/titulo.component';
import { SubtituloComponent } from '../subtitulo/subtitulo.component';
import { LivroService } from '../../services/livro.service';
@Component({
  selector: 'app-formulario',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    CampoTextoComponent,
    CommonModule,
    ListaSuspensaComponent,
    BotaoComponent,
    DivisorComponent,
    TituloComponent,
    SubtituloComponent,
  ],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit, OnChanges {
  livroFormulario!: FormGroup;

  generos: GeneroLiterario[] = [];

  livro = input<Livro | null>(null);

  submitForm = output<Livro>();

  constructor(
    private formBuilder: FormBuilder,
    private livroService: LivroService
  ) {}

  ngOnInit() {
    this.inicializarlivroFormulario();
    this.generos = this.livroService.generos;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['livro'] && this.livro()) {
      this.livroFormulario.patchValue({
        ...this.livro(),
        genero: this.livro()?.genero.id || '',
      });
    }
  }

  inicializarlivroFormulario() {
    this.livroFormulario = this.formBuilder.group({
      id: [''],
      titulo: [''],
      autoria: [''],
      favorito: [false],
      genero: [''],
      imagem: [''],
    });
  }

  emitirLivroAtualizado(): void {
    const livroAtualizado: Livro = {
      ...this.livroFormulario.value,
      genero: this.generos.find((genero) => {
        return genero.id === this.livroFormulario.value.genero;
      }),
    };

    this.submitForm.emit(livroAtualizado);
  }
}
