import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectFieldComponent } from '../select-field/select-field.component';
import { ButtonComponent } from '../button/button.component';
import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-transaction-form',
  imports: [
    SelectFieldComponent,
    ButtonComponent,
    InputFieldComponent,
    FormsModule,
  ],
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.css',
})
export class TransactionFormComponent {
  value: string = '123';

  onSubmit() {
    alert(`valor: ${this.value}`);
  }
}
