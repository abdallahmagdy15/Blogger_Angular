import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';
import { Author } from '../_models/author';
import { Comment } from '../_models/comment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(public http: HttpClient) {

  }

  selectedBlog: Blog = new Blog(new Author('', '', '', '', '', ''), '', '', '', new Date(), new Date(), '');

  getBlogs()  {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/home');
  }

  getAuthorBlogs(authorId: string): Observable<Blog[]> {

    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/user/' + authorId);
  }
  getFollowingsBlogs(): Observable<Blog[]> {

    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/followings');
  }

  addComment(comment:Comment){
    
    return this.http.post<Comment>('https://iti-blogger.herokuapp.com/blogs/'+this.selectedBlog._id+'/comments',comment);
  }

  addLike(authId:string){
    
    return this.http.post<Author>('https://iti-blogger.herokuapp.com/blogs/'+this.selectedBlog._id+'/like',authId);
  }
  unLike(authId:string){
    
    return this.http.post<Author>('https://iti-blogger.herokuapp.com/blogs/'+this.selectedBlog._id+'/unlike',authId);
  }


}
