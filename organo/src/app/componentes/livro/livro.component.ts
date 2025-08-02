import { CommonModule } from '@angular/common';
import { Component, input, inject } from '@angular/core';
import { LivroService } from '../../services/livro.service';
import { Livro } from './livro';
import { BotaoComponent } from '../botao/botao.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro',
  imports: [CommonModule, BotaoComponent],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css',
})
export class LivroComponent {
  private livroService: LivroService = inject(LivroService);
  private route: Router = inject(Router);

  livro = input.required<Livro>();

  alternarFavorito() {
    const livroAtualizado: Livro = {
      ...this.livro(),
      favorito: !this.livro().favorito,
    };

    this.livroService.atualizarGenero(livroAtualizado).subscribe({
      next: () => {
        this.livro().favorito = livroAtualizado.favorito;
      },

      error: (error) => {
        console.error(error);
      },
    });
  }

  excluirLivro(livroId: string): void {
    this.livroService.excluirLivroPorId(livroId).subscribe({
      next: () => {
        alert('livro excluido!');
        window.location.reload();
      },
      error: () => {
        alert('erro ao excluir livro.');
      },
    });
  }
}
