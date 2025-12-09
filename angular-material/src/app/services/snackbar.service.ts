import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private readonly snackbar = inject(MatSnackBar);

  readonly open = (message: string): void => {
    const snackbarConfig: MatSnackBarConfig = {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
    };

    this.snackbar.open(message, undefined, snackbarConfig);
  };
}
