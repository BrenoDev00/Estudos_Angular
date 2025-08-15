import { Injectable, Signal, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private readonly isLoadingSignal = signal<boolean>(false);

  readonly isLoading: Signal<boolean> = this.isLoadingSignal.asReadonly();

  setLoading(isLoading: boolean): void {
    this.isLoadingSignal.set(isLoading);
  }
}
