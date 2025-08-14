import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { MensagemErroService } from '../services/mensagem-erro.service';
import { inject } from '@angular/core';
import { obterMensagemDeErro } from '../utils/obter-mensagem-de-erro';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const mensageErroService: MensagemErroService = inject(MensagemErroService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const mensageDeErro: string = obterMensagemDeErro(error.status);

      mensageErroService.mostrarMensagemErro(mensageDeErro);

      return throwError(() => error);
    })
  );
};
