import { Routes } from '@angular/router';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ListaPostagemComponent } from './paginas/lista-postagem/lista-postagem.component';
import { AuthGuard } from './guards/auth.guard';
import { NaoEncontradoComponent } from './paginas/nao-encontrado/nao-encontrado.component';
import { LayoutComponent } from './componentes/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: 'posts',
        title: 'Posts',
        component: ListaPostagemComponent,
      },
    ],
  },
  {
    path: 'registro',
    title: 'Registro',
    component: RegistroComponent,
  },

  {
    path: '**',
    title: 'Página não encontrada',
    component: NaoEncontradoComponent,
  },
];
