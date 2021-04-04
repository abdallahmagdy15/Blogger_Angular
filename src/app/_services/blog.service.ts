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

  getBlogs(index:number=0) {
    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/home?skip='+index*10);
  }

  getAuthorBlogs(authorId: string,index:number=0): Observable<Blog[]> {

    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/user/' + authorId+'?skip='+index*10);
  }
  getFollowingsBlogs(index:number=0): Observable<Blog[]> {

    return this.http.get<Blog[]>('https://iti-blogger.herokuapp.com/blogs/followings?skip='+index*10);
  }
  public getOneBlog(blogid: string): Observable<Blog> {
    return this.http.get<Blog>('https://iti-blogger.herokuapp.com/blogs/blog/' + blogid);
  }

  createBlog(blog: any) {
    return this.http.post<any>('https://iti-blogger.herokuapp.com/blogs/', blog);
  }

  updateBlog(blog: any,blogid : string) {
    return this.http.patch<any>('https://iti-blogger.herokuapp.com/blogs/'+blogid, blog);
  }

  addComment(comment: any, blogid: string) {

    return this.http.post('https://iti-blogger.herokuapp.com/blogs/' + blogid + '/comments', comment);
  }

  likeBlog(blogid: string, likeState: string) {

    return this.http.post(`https://iti-blogger.herokuapp.com/blogs/${blogid}/${likeState}`, {});
  }

  likeComment(blogid: string, commentid: string, likeState: string) {

    return this.http.post(`https://iti-blogger.herokuapp.com/blogs/${blogid}/comments/${commentid}/${likeState}`, {});
  }

  removeBlog(blogid: string) {
    return this.http.delete(`https://iti-blogger.herokuapp.com/blogs/${blogid}`);
  }


}
