import { Comment } from '../_models/comment';
import { Component, OnInit } from '@angular/core';
import { Author } from '../_models/author';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  constructor(public blogService:BlogService,public authenticationService:AuthenticationService ) { }

  blog: Blog = this.blogService.selectedBlog
  blogcomment:Comment=new Comment(new Author('','','','','',''),'','');
  counterComments = this.blog.comments?.length
  commentForm:FormGroup=new FormGroup({});
  ngOnInit(): void {
    this.commentForm= new FormGroup({
      body:new FormControl('',Validators.required)//['',Validators.required]
    });
  }

  onSubmit(form:FormGroup){
    
    if(this.authenticationService.isAuthenticated()){
  //   console.log(this.authenticationService.getCurrUser());
     this.blogService.addComment(form.value).subscribe(a=>{
      console.log(a);
  })
    }

  }

}
