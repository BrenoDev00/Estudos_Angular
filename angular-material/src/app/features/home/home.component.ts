import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
@Component({
  selector: 'home',
  imports: [MatButtonToggleModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
