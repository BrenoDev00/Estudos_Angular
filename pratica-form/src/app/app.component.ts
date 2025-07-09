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
    name: new FormControl(''),
    age: new FormControl(0),

    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    }),
  });

  changeNameField(): void {
    this.userForm.get('name')?.setValue('Pedro');
  }

  clearFields(): void {
    this.userForm.get('name')?.setValue('');
    this.userForm.get('age')?.setValue(0);
    this.userForm.get('address.street')?.setValue('');
    this.userForm.get('address.city')?.setValue('');
    this.userForm.get('address.state')?.setValue('');
  }

  onSubmit() {
    alert(
      this.userForm.value.name +
        ' ' +
        this.userForm.value.age +
        ' ' +
        this.userForm.value.address.street
    );

    console.log(this.userForm.value);
  }
}
