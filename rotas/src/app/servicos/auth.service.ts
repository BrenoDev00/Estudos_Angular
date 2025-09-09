import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSignal = signal<boolean>(false);

  isAuthenticated = this.isAuthenticatedSignal.asReadonly();

  login(): void {
    this.isAuthenticatedSignal.set(true);
  }

  logout(): void {
    this.isAuthenticatedSignal.set(false);
  }
}
