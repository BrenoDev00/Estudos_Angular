import { Component, OnInit } from '@angular/core';
import { Livro } from '../../componentes/livro/livro';
import { FormularioComponent } from '../../componentes/formulario/formulario.component';
@Component({
  selector: 'app-editar-livro',
  imports: [FormularioComponent],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.css',
})
export class EditarLivroComponent {
  livro!: Livro;
}
