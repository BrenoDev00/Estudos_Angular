import { Component } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form.component';
import { RefactoredUserFormComponent } from './components/refactored-user-form/refactored-user-form.component';

@Component({
  selector: 'app-root',
  imports: [UserFormComponent, RefactoredUserFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
