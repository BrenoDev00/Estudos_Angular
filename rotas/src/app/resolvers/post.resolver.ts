import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Postagem } from '../models/post.model';
import * as data from '../db.json';
export const postResolver: ResolveFn<Postagem | undefined> = (
  route: ActivatedRouteSnapshot
) => {
  const id = route.paramMap.get('id');

  const posts: Postagem[] = data.posts;

  return posts.find((post) => post.id === id);
};
