import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { mockedBooks } from '../../constants/mocked-books';

@Component({
  selector: 'app-literary-gender',
  imports: [BookCardComponent],
  templateUrl: './literary-gender.component.html',
  styleUrl: './literary-gender.component.css',
})
export class LiteraryGenderComponent {
  book = mockedBooks[0];
}
