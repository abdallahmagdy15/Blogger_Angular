import { Observable } from 'rxjs';
import { Author } from './../_models/author';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private headers: HttpHeaders = new HttpHeaders();

  constructor(public http: HttpClient, private auth: AuthenticationService) {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.headers.append('authorization', this.auth.secureToken);
  }

  searchForAuthor(query: string): Observable<Author[]> {
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users?author=' + query, { headers: this.headers });
  }
  searchBlogsByAuthor(query: string): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/search?author=' + query, { headers: this.headers });
  }
  searchBlogsByTitle(query: string): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/search?title=' + query, { headers: this.headers });
  }
  searchBlogsByBody(query: string): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/search?body=' + query, { headers: this.headers });
  }
  searchBlogsByTag(query: string): Observable<Blog[]> {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/search?tag=' + query, { headers: this.headers });
  }
}
