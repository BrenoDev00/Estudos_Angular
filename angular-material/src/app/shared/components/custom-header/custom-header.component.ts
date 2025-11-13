import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'custom-header',
  imports: [MatButtonModule, MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './custom-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHeaderComponent {
  private readonly authService = inject(AuthService);

  readonly isLoggedIn = this.authService.isLoggedIn;

  login = (): void => {
    this.authService.login();
  };

  logout = (): void => {
    this.authService.logout();
  };
}
