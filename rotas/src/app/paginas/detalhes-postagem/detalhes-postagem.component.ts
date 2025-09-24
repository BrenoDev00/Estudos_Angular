import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Postagem } from '../../models/post.model';
import { UsuarioPostagemComponent } from '../../componentes/usuario-postagem/usuario-postagem.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalhes-postagem',
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
  imports: [CommonModule, UsuarioPostagemComponent],
})
export class DetalhesPostagemComponent {
  private readonly activatedRoute = inject(ActivatedRoute);

  post: Postagem | undefined;

  constructor() {
    this.post = this.activatedRoute.snapshot.data['post'];
  }
}
