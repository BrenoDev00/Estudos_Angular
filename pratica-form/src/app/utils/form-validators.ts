import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const samePasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get('password');
  const samePassword = control.get('samePassword');

  return password?.value === samePassword?.value
    ? null
    : { samePasswordValidator: true };
};
