import { BookInterface } from './book.type';

export interface BookGenderInterface {
  id: string;
  value: string;
  books: BookInterface[];
}
