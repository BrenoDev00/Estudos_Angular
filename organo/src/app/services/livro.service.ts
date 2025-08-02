import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Livro } from '../componentes/livro/livro';
import { GeneroLiterario } from '../componentes/livro/livro';
@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private API_URL: string = 'http://localhost:3000/livros';

  generos: GeneroLiterario[] = [
    { id: 'romance', value: 'Romance' },
    { id: 'misterio', value: 'Mistério' },
    { id: 'fantasia', value: 'Fantasia' },
    { id: 'ficcao-cientifica', value: 'Ficção Científica' },
    { id: 'tecnicos', value: 'Técnicos' },
  ];

  constructor(private httpClient: HttpClient) {}

  obterLivros(): Observable<Livro[]> {
    return this.httpClient.get<Livro[]>(this.API_URL);
  }

  obterLivroPorId(livroId: string): Observable<Livro> {
    return this.httpClient.get<Livro>(`${this.API_URL}/${livroId}`);
  }

  organizarLivrosPorGenero(): Observable<Map<string, Livro[]>> {
    return this.obterLivros().pipe(
      map((livros: Livro[]) => {
        const livrosPorGenero = new Map<string, Livro[]>();

        livros.forEach((livro: Livro) => {
          const generoId =
            typeof livro.genero === 'string' ? livro.genero : livro.genero?.id;

          if (generoId) {
            if (!livrosPorGenero.has(generoId)) {
              livrosPorGenero.set(generoId, []);
            }
            livrosPorGenero.get(generoId)?.push(livro);
          }
        });
        return livrosPorGenero;
      })
    );
  }

  adicionarLivro(novoLivro: Livro): Observable<Livro> {
    return this.httpClient.post<Livro>(this.API_URL, novoLivro);
  }

  atualizarLivroPorId(livro: Livro, livroId: string): Observable<Livro> {
    return this.httpClient.put<Livro>(`${this.API_URL}/${livroId}`, livro);
  }

  atualizarGenero(livro: Livro): Observable<Livro> {
    return this.httpClient.patch<Livro>(`${this.API_URL}/${livro.id}`, {
      favorito: livro.favorito,
    });
  }

  excluirLivroPorId(livroId: string): Observable<Livro> {
    return this.httpClient.delete<Livro>(`${this.API_URL}/${livroId}`);
  }
}
