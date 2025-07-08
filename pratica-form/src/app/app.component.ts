import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { TextFieldComponent } from './components/text-field/text-field.component';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, TextFieldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  nameField = new FormControl('');

  ageField = new FormControl(0);
}
