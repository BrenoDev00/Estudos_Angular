import { Routes } from '@angular/router';
import { SellMilesComponent } from '../features/sell-miles/sell-miles.component';
import { AboutComponent } from '../features/about/about.component';
import { HomeComponent } from '../features/home/home.component';
import { RegisterComponent } from '../features/register/register.component';

export const routes: Routes = [
  { path: '', title: 'Inicio', component: HomeComponent },
  { path: 'vender-milhas', title: 'Vender milhas', component: SellMilesComponent },
  { path: 'sobre', title: 'Sobre', component: AboutComponent },
  { path: 'cadastrar', title: 'Cadastrar', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];
