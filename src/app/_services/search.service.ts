import { Observable } from 'rxjs';
import { Author } from './../_models/author';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})

export class SearchService {
  public query: string = "";
  public source: string = "";
  public id: string = "";

  constructor(public http: HttpClient, private auth: AuthenticationService) {
  }

  public search(): Observable<any> {
    switch (this.source) {
      case "home":
        return this.searchHomeBlogs();
      case "followings-blogs":
        return this.searchFollowingsBlogs();
      case "suggestions":
        return this.searchSuggestions();
      case "followers":
        return this.searchFollowers(this.id);
      case "followings":
        return this.searchFollowings(this.id);
      case "author-blogs":
        return this.searchProfileBlogs(this.id);
      default:
        return new Observable();
    }
  }

  //search for author
  searchFollowers(uid: string): Observable<Author[]> {
    if (this.query[0] == '@')
      this.query = '?username=' + this.query.slice(1);
    else
      this.query = '?authorname=' + this.query;
    return this.http.get<Author[]>(`https://iti-blogger.herokuapp.com/users/${uid}/followers${this.query}`);
  }
  searchFollowings(uid: string): Observable<Author[]> {
    if (this.query[0] == '@')
      this.query = '?username=' + this.query.slice(1);
    else
      this.query = '?authorname=' + this.query;
    return this.http.get<Author[]>(`https://iti-blogger.herokuapp.com/users/${uid}/followings${this.query}`);
  }
  searchSuggestions(): Observable<Author[]> {
    if (this.query[0] == '@')
      this.query = '?username=' + this.query.slice(1);
    else
      this.query = '?authorname=' + this.query;
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users/suggestions/list' + this.query);
  }


  //search for blogs
  searchHomeBlogs(): Observable<Blog[]> {
    if (this.query.startsWith('#'))
      this.query = "?tag=" + this.query.slice(1);
    else
      this.query = `?title=${this.query}?body=${this.query}`;
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/search' + this.query);
  }

  searchProfileBlogs(uid: string): Observable<Blog[]> {
    if (this.query.startsWith('#'))
      this.query = `${uid}?tag=${this.query.slice(1)}`;
    else
      this.query = `${uid}?title=${this.query}?body=${this.query}`;
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/user/' + this.query);
  }

  searchFollowingsBlogs(): Observable<Blog[]> {
    if (this.query.startsWith('#'))
      this.query = `$?tag=${this.query.slice(1)}`;
    else
      this.query = `$?title=${this.query}?body=${this.query}`;
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/followings' + this.query);
  }
}
