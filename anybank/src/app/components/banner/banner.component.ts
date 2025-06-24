import { Component } from '@angular/core';
import { WelcomeInfoComponent } from './welcome-info/welcome-info.component';
import { AccountInfoComponent } from './account-info/account-info.component';

@Component({
  selector: 'app-banner',
  imports: [WelcomeInfoComponent, AccountInfoComponent],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {}
