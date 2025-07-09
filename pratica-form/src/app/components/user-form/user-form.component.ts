import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TextFieldComponent } from '../text-field/text-field.component';
import { FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
import { UserFormInterface } from '../../types/user-form.type';
@Component({
  selector: 'app-user-form',
  imports: [ButtonComponent, TextFieldComponent, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
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
