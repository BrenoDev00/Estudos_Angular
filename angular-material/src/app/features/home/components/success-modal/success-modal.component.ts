import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogClose,
} from '@angular/material/dialog';
import { SuccessModalData } from '../../../../models/success-modal-data';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'success-modal',
  imports: [MatDialogTitle, MatDialogContent, MatButton, MatDialogClose],
  templateUrl: './success-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuccessModalComponent {
  data = inject<SuccessModalData>(MAT_DIALOG_DATA);
}
