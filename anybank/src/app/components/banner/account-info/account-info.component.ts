import { Component, input, InputSignal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-account-info',
  imports: [CurrencyPipe],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css',
})
export class AccountInfoComponent {
  balance: InputSignal<number> = input.required<number>();
}
