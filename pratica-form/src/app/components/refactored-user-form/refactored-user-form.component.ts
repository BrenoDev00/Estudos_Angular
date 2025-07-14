import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TextFieldComponent } from '../text-field/text-field.component';
import { ButtonComponent } from '../button/button.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { SelectFieldComponent } from '../select-field/select-field.component';
import { samePasswordValidator } from '../../utils/form-validators';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-refactored-user-form',
  imports: [
    NgIf,
    SelectFieldComponent,
    ReactiveFormsModule,
    ErrorMessageComponent,
    TextFieldComponent,
    ButtonComponent,
  ],
  templateUrl: './refactored-user-form.component.html',
})
export class RefactoredUserFormComponent {
  private formBuilder = inject(FormBuilder);

  userForm = this.formBuilder.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(64),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(120)]],
      role: ['', Validators.required],
      address: this.formBuilder.group({
        street: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(54),
          ],
        ],
        city: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(54),
          ],
        ],
        state: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(54),
          ],
        ],
      }),
      password: ['', [Validators.required]],
      samePassword: ['', [Validators.required]],
    },
    { validators: samePasswordValidator }
  );

  roleOptions: string[] = ['Administrador', 'Contador', 'Programador'];

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    alert(JSON.stringify(this.userForm.value));

    console.log(this.userForm.value);
  }

  resetFields(): void {
    this.userForm.reset();
  }
}
