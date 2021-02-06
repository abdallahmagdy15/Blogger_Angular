import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';
import { Author } from '../_models/author';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private headers: HttpHeaders = new HttpHeaders();

  constructor(public http: HttpClient, private auth: AuthenticationService) {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.headers.append('authorization', this.auth.secureToken);
  }

  selectedBlog: Blog = new Blog(new Author('', '', '', '', '', ''), '', '', '', new Date(), new Date(), '');

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/home');
  }
  getAuthorBlogs(authorId: string): Observable<Blog[]> {

    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/user/' + authorId, { headers: this.headers });
  }
  getFollowingsBlogs(): Observable<Blog[]> {

    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/followings', { headers: this.headers });
  }

}
