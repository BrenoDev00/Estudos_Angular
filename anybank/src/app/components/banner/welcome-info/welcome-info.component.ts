import { Component } from '@angular/core';
import { DatePipe, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-welcome-info',
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './welcome-info.component.html',
  styleUrl: './welcome-info.component.css',
})
export class WelcomeInfoComponent {
  currentDate: Date = new Date();
}
