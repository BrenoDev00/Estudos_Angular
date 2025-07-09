import { Component } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form.component';
@Component({
  selector: 'app-root',
  imports: [UserFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
