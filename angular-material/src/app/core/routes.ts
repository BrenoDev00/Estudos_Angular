import { Routes } from '@angular/router';
import { SellMilesComponent } from '../features/sell-miles/sell-miles.component';
import { AboutComponent } from '../features/about/about.component';
import { HomeComponent } from '../features/home/home.component';
import { RegisterComponent } from '../features/register/register.component';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  { path: '', title: 'Inicio', component: HomeComponent },
  {
    path: 'vender-milhas',
    title: 'Vender milhas',
    canActivate: [authGuard],
    component: SellMilesComponent,
  },
  { path: 'sobre', title: 'Sobre', canActivate: [authGuard], component: AboutComponent },
  { path: 'cadastrar', title: 'Cadastrar', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];
