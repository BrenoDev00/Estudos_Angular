import { Component } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, TransactionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  processTransaction() {
    alert('transação adicionada');
  }
}
