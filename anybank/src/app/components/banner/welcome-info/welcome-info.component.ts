import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-welcome-info',
  imports: [DatePipe],
  templateUrl: './welcome-info.component.html',
  styleUrl: './welcome-info.component.css',
})
export class WelcomeInfoComponent {
  currentDate: Date = new Date();
}
