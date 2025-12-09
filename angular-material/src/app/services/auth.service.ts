import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInSignal = signal<boolean>(false);

  private readonly router = inject(Router);

  isLoggedIn = this.isLoggedInSignal.asReadonly();

  login = (): void => {
    this.isLoggedInSignal.set(true);
  };

  redirectToHomePage = (): void => {
    this.router.navigate(['']);
  };

  logout = (): void => {
    this.isLoggedInSignal.set(false);

    this.redirectToHomePage();
  };
}
