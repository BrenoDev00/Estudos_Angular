import { Routes } from '@angular/router';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ListaPostagemComponent } from './paginas/lista-postagem/lista-postagem.component';
import { AuthGuard } from './guards/auth.guard';
import { NaoEncontradoComponent } from './paginas/nao-encontrado/nao-encontrado.component';

export const routes: Routes = [
  {
    path: 'registro',
    title: 'Registro',
    component: RegistroComponent,
  },
  {
    path: 'posts',
    title: 'Posts',
    canActivate: [AuthGuard],
    component: ListaPostagemComponent,
  },
  {
    path: '**',
    title: 'Página não encontrada',
    component: NaoEncontradoComponent,
  },
];
