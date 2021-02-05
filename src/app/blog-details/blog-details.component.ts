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

  constructor(public blogService: BlogService, public ar: ActivatedRoute,private auth :AuthenticationService , private router : Router) { }
   blog: Blog = this.blogService.selectedBlog
  blogcomment:Comment=new Comment(new Author('','','','','',''),'','');
  counterComments = this.blog.Comments?.length
  ngOnInit(): void {
    if(!this.auth.authenticated){
      this.router.navigate(['login']);
    }
  }
}
