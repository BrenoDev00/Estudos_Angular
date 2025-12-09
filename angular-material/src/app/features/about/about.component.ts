import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { DollarRateService } from '../../services/dollar-rate.service';
import { DollarRateData } from '../../models/dollar-rate-data';
import { DatePipe, CurrencyPipe } from '@angular/common';
@Component({
  selector: 'about',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  private readonly dollarRateService = inject(DollarRateService);

  dollarRateData = signal<DollarRateData | undefined>(undefined);

  ngOnInit(): void {
    this.getDollarRate();
  }

  private readonly getDollarRate = async (): Promise<void> => {
    const dollarRateData = await this.dollarRateService.getDollarRate();

    this.dollarRateData.set(dollarRateData);
  };
}
