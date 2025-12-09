import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DollarRateData } from '../models/dollar-rate-data';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DollarRateService {
  private readonly baseApiUrl = 'https://api.frankfurter.dev/v1/latest';
  
  private readonly http = inject(HttpClient);

  getDollarRate = async (): Promise<DollarRateData | undefined> => {
    const dollarRateUrl = `${this.baseApiUrl}?base=USD&symbols=BRL`;

    try {
      const dollarRateData$ = this.http.get<DollarRateData>(dollarRateUrl);

      return await firstValueFrom(dollarRateData$);
    } catch (error) {
      console.error(error);
      return;
    }
  };
}
