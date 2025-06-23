import { Component, input } from '@angular/core';
import { BookInterface } from './book.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-card',
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css',
})
export class BookCardComponent {
  book = input.required<BookInterface>();

  toggleFavorite(): void {
    this.book().favorite = !this.book().favorite;
  }
}
