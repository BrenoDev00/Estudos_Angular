import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { BotaoComponent } from '../../componentes/botao/botao.component';
import { DivisorComponent } from '../../componentes/divisor/divisor.component';
import { EstadoVazioComponent } from '../../componentes/estado-vazio/estado-vazio.component';
import { GeneroLiterario, Livro } from '../../componentes/livro/livro';
import { LivroComponent } from '../../componentes/livro/livro.component';
import { SubtituloComponent } from '../../componentes/subtitulo/subtitulo.component';
import { TituloComponent } from '../../componentes/titulo/titulo.component';
import { LivroService } from '../../services/livro.service';
@Component({
  selector: 'app-lista-livros',
  imports: [
    CommonModule,
    LivroComponent,
    TituloComponent,
    DivisorComponent,
    BotaoComponent,
    SubtituloComponent,
    EstadoVazioComponent,
  ],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css',
})
export class ListaLivrosComponent implements OnInit {
  generosComLivros: { genero: GeneroLiterario; livros: Livro[] }[] = [];

  constructor(private livroService: LivroService) {}
  // Outra forma de usar o serviço:
  // private livroService: LivroService = inject(LivroService)

  ngOnInit() {
    this.livroService.organizarLivrosPorGenero().subscribe({
      next: (livrosPorGenero) => {
        this.generosComLivros = this.livroService.generos.map((genero) => ({
          genero,
          livros: livrosPorGenero.get(genero.id) ?? [],
        }));
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
