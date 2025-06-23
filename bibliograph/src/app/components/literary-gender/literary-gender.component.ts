import { Component, input } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { BookGenderInterface } from '../book-card/book-gender.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-literary-gender',
  imports: [BookCardComponent, CommonModule],
  templateUrl: './literary-gender.component.html',
  styleUrl: './literary-gender.component.css',
})
export class LiteraryGenderComponent {
  gender = input.required<BookGenderInterface>();
}
