import { Component, inject, OnInit } from '@angular/core';
import { Livro } from '../../componentes/livro/livro';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';
import { LivroService } from '../../services/livro.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editar-livro',
  imports: [FormularioComponent],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.css',
})
export class EditarLivroComponent implements OnInit {
  livro!: Livro;

  private livroService: LivroService = inject(LivroService);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const livroId = this.activatedRoute.snapshot.paramMap.get('id');

    if (livroId) {
      this.livroService.obterLivroPorId(livroId).subscribe({
        next: (livro) => {
          this.livro = livro;
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }
}
