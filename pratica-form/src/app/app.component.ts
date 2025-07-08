import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ButtonComponent } from './components/button/button.component';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, ButtonComponent, TextFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nameField = new FormControl('');

  ageField = new FormControl(0);

  changeNameField(): void {
    this.nameField.setValue('Luana');
  }

  clearNameField(): void {
    this.nameField.setValue('');
  }
}
