import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ButtonComponent } from './components/button/button.component';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, ButtonComponent, TextFieldComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  userForm: FormGroup = new FormGroup({
    nameField: new FormControl(''),
    ageField: new FormControl(0),
  });

  changeNameField(): void {
    this.userForm.get('nameField')?.setValue('Pedro');
  }

  clearFields(): void {
    this.userForm.get('nameField')?.setValue('');
    this.userForm.get('ageField')?.setValue(0);
  }

  onSubmit() {
    alert(this.userForm.value.nameField + ' ' + this.userForm.value.ageField);
  }
}
