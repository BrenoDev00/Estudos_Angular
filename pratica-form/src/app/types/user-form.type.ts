import { FormControl, FormGroup } from '@angular/forms';

type UserAdressType = {
  street: FormControl<string | null>;
  city: FormControl<string | null>;
  state: FormControl<string | null>;
};

export interface UserFormInterface {
  name: FormControl<string | null>;
  email: FormControl<string | null>;
  age: FormControl<number | null>;
  address: FormGroup<UserAdressType>;
}
