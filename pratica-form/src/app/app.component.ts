import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { ButtonComponent } from './components/button/button.component';
import { UserFormInterface } from './types/user-form.type';
@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, ButtonComponent, TextFieldComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  userForm = new FormGroup<UserFormInterface>({
    name: new FormControl(''),
    age: new FormControl(0, { nonNullable: true }),

    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
    }),
  });

  changeFields(): void {
    this.userForm.patchValue({
      name: 'Nancy',
      age: 34,
      address: {
        street: 'Rua das flores',
        city: 'Zona Norte',
        state: 'São Paulo',
      },
    });
  }

  clearFields(): void {
    this.userForm.reset();
  }

  onSubmit(): void {
    alert(JSON.stringify(this.userForm.value));

    console.log(this.userForm.value);
  }
}
