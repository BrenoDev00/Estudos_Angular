import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { TextFieldComponent } from '../text-field/text-field.component';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'app-refactored-user-form',
  imports: [ReactiveFormsModule, TextFieldComponent, ButtonComponent],
  templateUrl: './refactored-user-form.component.html',
})
export class RefactoredUserFormComponent {
  private formBuilder = inject(FormBuilder);

  userForm = this.formBuilder.group({
    name: ['', Validators.required],
    age: [0],
    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
    }),
  });

  onSubmit(): void {
    alert(JSON.stringify(this.userForm.value));

    console.log(this.userForm.value);
  }

  resetFields(): void {
    this.userForm.patchValue({
      name: '',
      age: 0,
      address: {
        street: '',
        city: '',
        state: '',
      },
    });
  }
}
