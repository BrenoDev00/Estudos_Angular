import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-error-message',
  imports: [NgClass],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css',
})
export class ErrorMessageComponent {
  message = input.required<string>();

  class = input<string>();
}
