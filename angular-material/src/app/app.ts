import { Component, signal } from '@angular/core';
import { CustomHeaderComponent } from './shared/components/custom-header/custom-header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [CustomHeaderComponent, RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angular-material');
}
