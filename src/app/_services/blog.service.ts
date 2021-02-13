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

  getBlogs() {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/home');
  }

  getAuthorBlogs(authorId: string): Observable<Blog[]> {

    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/user/' + authorId);
  }
  getFollowingsBlogs(): Observable<Blog[]> {

    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/followings');
  }
  public getOneBlog(blogid: string): Observable<Blog> {
    return this.http.get<Blog>('https://iti-blogger.herokuapp.com/blogs/' + blogid);
  }

  createBlog(blog:any) {
    return this.http.post<Blog>('https://iti-blogger.herokuapp.com/blogs/',blog);
  }

  addComment(comment: Comment, blogid: string) {

    return this.http.post<Comment>('https://iti-blogger.herokuapp.com/blogs/' + blogid + '/comments', comment);
  }

  likeBlog(blogid: string, likeState: string) {

    return this.http.post(`https://iti-blogger.herokuapp.com/blogs/${blogid}/${likeState}`, {});
  }

  likeComment(blogid: string, commentid: string, likeState: string) {

    return this.http.post(`https://iti-blogger.herokuapp.com/blogs/${blogid}/comments/${commentid}/${likeState}`, {});
  }


}
