import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as data from '../../db.json';
import { Postagem } from '../../models/post.model';
import { CartaoPostagemComponent } from '../../componentes/cartao-postagem/cartao-postagem.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-postagem',
  standalone: true,
  imports: [CommonModule, CartaoPostagemComponent],
  templateUrl: './lista-postagem.component.html',
  styleUrls: ['./lista-postagem.component.css'],
})
export class ListaPostagemComponent implements OnInit {
  posts: Postagem[] = [];

  private readonly router = inject(Router);

  ngOnInit() {
    this.posts = data.posts;
  }

  vaParaOPost = (postId: string): void => {
    this.router.navigate(['/posts', postId]);
  };
}
