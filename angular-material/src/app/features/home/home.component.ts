import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
@Component({
  selector: 'home',
  imports: [
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly authService = inject(AuthService);
  private readonly fb = inject(FormBuilder);
  private readonly successModal = inject(MatDialog);

  readonly isLoggedIn = this.authService.isLoggedIn;

  readonly flightForm = this.fb.group({
    origin: ['', Validators.required],
    destination: ['', Validators.required],
    ticketType: ['', Validators.required],
  });

  readonly formControls = this.flightForm.controls;

  toggleFlightFormFields = (): void => {
    this.flightForm.patchValue({
      origin: this.formControls.destination.value,
      destination: this.formControls.origin.value,
    });
  };

  openSuccessModal = (): void => {
    this.successModal.open(SuccessModalComponent, {
      data: this.flightForm.value,
    });
  };

  handleFormSubmit = (): void => {
    this.openSuccessModal();

    this.flightForm.reset();
  };
}
