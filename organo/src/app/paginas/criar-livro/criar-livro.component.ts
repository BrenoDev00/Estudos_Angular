import { Component } from '@angular/core';
import { Livro } from '../../componentes/livro/livro';
import { LivroService } from '../../services/livro.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-criar-livro',
  imports: [],
  templateUrl: './criar-livro.component.html',
  styleUrl: './criar-livro.component.css',
})
export class CriarLivroComponent {
  constructor(private livroService: LivroService, private router: Router) {}

  criarLivro(livro: Livro): void {
    this.livroService.adicionarLivro(livro).subscribe(() => {
      this.router.navigate(['lista-livros']);
    });
  }
}
