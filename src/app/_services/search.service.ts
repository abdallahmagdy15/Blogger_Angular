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

  constructor(public http: HttpClient, private auth: AuthenticationService) {
  }

  //search for author
  searchFollowers(query: string, uid: string): Observable<Author[]> {
    if (query[0] == '@')
      query = '?username=' + query.slice(1);
    else
      query = '?authorname=' + query;
    return this.http.get<Author[]>(`https://iti-blogger.herokuapp.com/users/${uid}/followers${query}`);
  }
  searchFollowings(query: string, uid: string): Observable<Author[]> {
    if (query[0] == '@')
      query = '?username=' + query.slice(1);
    else
      query = '?authorname=' + query;
    return this.http.get<Author[]>(`https://iti-blogger.herokuapp.com/users/${uid}/followings${query}`);
  }
  searchSuggestions(query: string): Observable<Author[]> {
    if (query[0] == '@')
      query = '?username=' + query.slice(1);
    else
      query = '?authorname=' + query;
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users/suggestions/list' + query );
  }


  //search for blogs
  searchHomeBlogs(query: string): Observable<Blog[]> {
    if (query.startsWith('#'))
      query = "?tag=" + query.slice(1);
    else
      query = `?title=${query}?body=${query}`;
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/search' + query);
  }

  searchProfileBlogs(query: string, uid: string): Observable<Blog[]> {
    if (query.startsWith('#'))
      query = `${uid}?tag=${query.slice(1)}`;
    else
      query = `${uid}?title=${query}?body=${query}`;
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/user/' + query);
  }
  
  searchFollowingsBlogs(query: string): Observable<Blog[]> {
    if (query.startsWith('#'))
      query = `$?tag=${query.slice(1)}`;
    else
      query = `$?title=${query}?body=${query}`;
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/followings' + query );
  }
}
