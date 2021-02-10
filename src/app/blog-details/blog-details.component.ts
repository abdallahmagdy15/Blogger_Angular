import { Comment } from '../_models/comment';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';
import { Author } from '../_models/author';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(public blogService: BlogService, public ar: ActivatedRoute,public auth :AuthenticationService , private router : Router) { }
   blog: Blog = this.blogService.selectedBlog
  blogcomment:Comment=new Comment(new Author('','','','','',''),'','');
  counterComments = this.blog.comments?.length
  ngOnInit(): void {
    // if (!this.auth.isAuthenticated) {
    //   const curr = localStorage.getItem('currentUser');
    //   if (curr != null)
    //     this.auth.user = JSON.parse(curr);
    //   else
    //     this.router.navigate(['login']);
    // }
  }
}
