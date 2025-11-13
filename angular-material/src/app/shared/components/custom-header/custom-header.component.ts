import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'custom-header',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './custom-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHeaderComponent {}
