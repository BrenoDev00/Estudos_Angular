import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class MensagemErroService {
  private snackBar: MatSnackBar = inject(MatSnackBar);

  mostrarMensagemErro(mensagem: string) {
    const matSnackBarConfig: MatSnackBarConfig = {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    };

    this.snackBar.open(mensagem, 'Fechar', matSnackBarConfig);
  }
}
