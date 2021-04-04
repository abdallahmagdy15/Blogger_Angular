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
  public keyword: string = "";
  public source: string = "";
  public id: string = "";
  isResultsFound: boolean = false;
  isBlogs: boolean = true;
  authors: Author[] = [];
  blogs: Blog[] = [];
  public isLoading=false;
  constructor(public http: HttpClient, private auth: AuthenticationService) {
  }

  public search() {
    let res!: Observable<any>;
    switch (this.source) {
      case "home":
        res = this.searchHomeBlogs();
        break;
      case "followings-blogs":
        res = this.searchFollowingsBlogs();
        break;
      case "suggestions":
        res = this.searchSuggestions();
        break;
      case "followers":
        res = this.searchFollowers(this.id);
        break;
      case "followings":
        res = this.searchFollowings(this.id);
        break;
      case "author-blogs":
        res = this.searchProfileBlogs(this.id);
        break;
      default:
        res = this.searchHomeBlogs();
        break;
    }
    this.isLoading=true;
    res.subscribe(data => {
      if (data[0] != undefined) {//if there are any data 
        this.isResultsFound = true;
        this.isLoading=false;
        if (data[0].author == undefined) {//if it`s author array
          this.isBlogs = false;
          this.authors = data;
        }
        else {
          this.isBlogs = true;
          this.blogs = data;
        }
      }
      else {
        this.isResultsFound = false;
        this.blogs = [];
        this.authors = [];
      }
    });
  }

  //search for author
  searchFollowers(uid: string): Observable<Author[]> {
    if (this.query[0] == '@')
      this.query = '?username=' + this.query.slice(1);
    else
      this.query = '?authorname=' + this.query;

    console.log(uid);
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
      this.query = `?title=${this.query}&body=${this.query}`;

    //  console.log('https://iti-blogger.herokuapp.com/blogs/search' + this.query)
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/search' + this.query);
  }

  searchProfileBlogs(uid: string): Observable<Blog[]> {
    if (this.query.startsWith('#'))
      this.query = `${uid}?tag=${this.query.slice(1)}`;
    else
      this.query = `${uid}?title=${this.query}&body=${this.query}`;
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/user/' + this.query);
  }

  searchFollowingsBlogs(): Observable<Blog[]> {
    if (this.query.startsWith('#'))
      this.query = `?tag=${this.query.slice(1)}`;
    else
      this.query = `?title=${this.query}&body=${this.query}`;
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/followings' + this.query);
  }
}
