import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http: HttpClient, private auth: AuthenticationService) { }


  getBlogs() {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/home');
  }
  getAuthorBlogs(authorId: number) {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/user/' + authorId, { headers: { authorization: this.auth.secureToken } });
  }
  getFollowingsBlogs() {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/followings', { headers: { authorization: this.auth.secureToken } });
  }

}
