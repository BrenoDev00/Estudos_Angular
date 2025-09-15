import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nao-encontrado',
  imports: [],
  templateUrl: './nao-encontrado.component.html',
  styleUrl: './nao-encontrado.component.css',
})
export class NaoEncontradoComponent {
  private readonly router = inject(Router);

  redirectToRegisterPage(): void {
    this.router.navigate(['/registro']);
  }
}
