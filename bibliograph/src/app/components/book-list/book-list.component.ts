import { Component, OnInit } from '@angular/core';
import { BookGenderInterface } from '../book-card/book-gender.type';
import { BookInterface } from '../book-card/book.type';
import { mockedBooks } from '../../constants/mocked-books';
import { LiteraryGenderComponent } from '../literary-gender/literary-gender.component';

@Component({
  selector: 'app-book-list',
  imports: [LiteraryGenderComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
})
export class BookListComponent implements OnInit {
  genders: BookGenderInterface[] = [];

  booksByGender: Map<string, BookInterface[]> = new Map();

  ngOnInit(): void {
    this.booksByGender = new Map();

    mockedBooks.forEach((book) => {
      const genderId = book.gender.id;

      if (!this.booksByGender.has(genderId)) {
        this.booksByGender.set(genderId, []);
      }

      this.booksByGender.get(genderId)?.push(book);
    });

    this.genders = [
      {
        id: 'romance',
        value: 'Romance',
        books: this.booksByGender.get('romance') ?? [],
      },
      {
        id: 'misterio',
        value: 'Mistério',
        books: this.booksByGender.get('misterio') ?? [],
      },
      {
        id: 'fantasia',
        value: 'Fantasia',
        books: this.booksByGender.get('fantasia') ?? [],
      },
      {
        id: 'ficcao-cientifica',
        value: 'Ficção Científica',
        books: this.booksByGender.get('ficcao-cientifica') ?? [],
      },
      {
        id: 'tecnicos',
        value: 'Técnicos',
        books: this.booksByGender.get('tecnicos') ?? [],
      },
    ];
  }
}
