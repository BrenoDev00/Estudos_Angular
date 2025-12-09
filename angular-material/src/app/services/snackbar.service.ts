import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private readonly snackbar = inject(MatSnackBar);

  private readonly snackbarConfig: MatSnackBarConfig = {
    horizontalPosition: 'right',
    verticalPosition: 'top',
    duration: 5000,
  };

  readonly open = (message: string): void => {
    this.snackbar.open(message, undefined, this.snackbarConfig);
  };
}
