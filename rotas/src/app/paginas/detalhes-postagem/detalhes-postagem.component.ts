import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../db.json';
import { Postagem } from '../../models/post.model';
import { UsuarioPostagemComponent } from '../../componentes/usuario-postagem/usuario-postagem.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detalhes-postagem',
  templateUrl: './detalhes-postagem.component.html',
  styleUrls: ['./detalhes-postagem.component.css'],
  imports: [CommonModule, UsuarioPostagemComponent],
})
export class DetalhesPostagemComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);

  post = signal<Postagem | undefined>(undefined);

  ngOnInit(): void {
    this.getPostById();
  }

  getPostById = (): void => {
    const postId = this.activatedRoute.snapshot.paramMap.get('id');

    const post = data.posts.find((post) => post.id === postId);

    this.post.set(post);
  };
}
