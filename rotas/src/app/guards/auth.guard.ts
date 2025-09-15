import { CanActivateFn } from '@angular/router';
import { AuthService } from '../servicos/auth.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);

  const router = inject(Router);

  const isAuthenticated = authService.isAuthenticated();

  if (!isAuthenticated) {
    router.navigate(['/registro']);

    return false;
  }

  return true;
};
