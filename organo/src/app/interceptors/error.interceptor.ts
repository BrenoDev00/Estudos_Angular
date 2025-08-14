import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MensagemErroService } from '../services/mensagem-erro.service';
import { inject } from '@angular/core';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const mensageErroService: MensagemErroService = inject(MensagemErroService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      mensageErroService.mostrarMensagemErro(
        'Ocorreu um erro, tente novamente.'
      );

      return throwError(() => error);
    })
  );
};
