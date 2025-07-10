import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TextFieldComponent } from '../text-field/text-field.component';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { UserFormInterface } from '../../types/user-form.type';
@Component({
  selector: 'app-user-form',
  imports: [ButtonComponent, TextFieldComponent, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  userForm = new FormGroup<UserFormInterface>({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(64),
      Validators.pattern(/^(?!\s*$).{3,64}$/),
    ]),
    age: new FormControl(0, [
      Validators.required,
      Validators.min(18),
      Validators.max(64),
    ]),

    address: new FormGroup({
      street: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(64),
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(64),
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(62),
      ]),
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
