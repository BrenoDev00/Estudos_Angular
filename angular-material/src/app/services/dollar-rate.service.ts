import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DollarRateData } from '../models/dollar-rate-data';
import { firstValueFrom } from 'rxjs';
import { SnackbarService } from './snackbar.service';
import { DOLLAR_RATE_ERROR_MESSAGE } from '../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class DollarRateService {
  private readonly baseApiUrl = 'htt://api.frankfurter.dev/v1/latest';

  private readonly snackbar = inject(SnackbarService);

  private readonly http = inject(HttpClient);

  getDollarRate = async (): Promise<DollarRateData | undefined> => {
    const dollarRateUrl = `${this.baseApiUrl}?base=USD&symbols=BRL`;

    try {
      const dollarRateData$ = this.http.get<DollarRateData>(dollarRateUrl);

      return await firstValueFrom(dollarRateData$);
    } catch {
      this.snackbar.open(DOLLAR_RATE_ERROR_MESSAGE);
      return;
    }
  };
}
