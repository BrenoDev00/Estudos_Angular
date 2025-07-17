import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Livro } from '../componentes/livro/livro';
@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private API_URL: string = 'http://localhost:3000/livros';

  constructor(private httpClient: HttpClient) {}

  obterLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.API_URL);
  }
}
