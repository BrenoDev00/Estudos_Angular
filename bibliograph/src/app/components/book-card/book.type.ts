import { BookGenderInterface } from './book-gender.type';

export interface BookInterface {
  title: string;
  authorship: string;
  favorite: boolean;
  gender: BookGenderInterface;
  image: string;
}
