import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';
import { Author } from '../_models/author';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http: HttpClient, private auth: AuthenticationService) { }

  selectedBlog:Blog=new Blog(new Author('','','','','',''),'','','',new Date(),new Date(),'');

  getBlogs() {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/home');
  }
  getAuthorBlogs(authorId: string) {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/user/' + authorId, { headers: { authorization: this.auth.secureToken } });
  }
  getFollowingsBlogs() {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/followings', { headers: { authorization: this.auth.secureToken } });
  }

}
