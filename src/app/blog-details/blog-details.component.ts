import { BlogService } from './../_services/blog.service';
import { Comment } from '../_models/comment';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { AuthenticationService } from '../_services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from '../_models/author';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog = this.blogService.selectedBlog
  commentForm: FormGroup = new FormGroup({});
  isLiked: boolean = false;
  likesCount: number = 0;
  constructor(public blogService: BlogService, public authintication: AuthenticationService,
    public auth: AuthenticationService, private router: Router, private blogsService: BlogService) { }


  ngOnInit(): void {

    if (this.blog._id == "") {
      this.blogsService.getOneBlog(this.router.url.split('/')[2]).subscribe(_blog => {
        this.blog = _blog;
        this.likesCount = (this.blog.likes ? this.blog.likes.length : 0)
        if (this.blog.likes?.includes(this.auth.getCurrUser()._id)) {
          this.isLiked = true;
        }
      })
    }
    this.commentForm = new FormGroup({
      commentBody: new FormControl('',[ Validators.required])
    });
  }

  onSubmit(form: FormGroup) {

    if (this.auth.isAuthenticated()) {
      this.blogService.addComment(
        new Comment('',new Author('','','','','',''),'',form.value.commentBody,new Date(),new Date())
        , this.blog._id).subscribe(a => {
        console.log(a);
      })
    }
  }



  likeBlog() {
    let likeState = "unlike";
    this.likesCount--;
    if (this.isLiked) {
      likeState = "like";
      this.likesCount += 2;
    }
    this.blogService.likeBlog(this.blog._id, likeState).subscribe(res =>
      console.log(res)
    );
  }




  //edit remove =>blog auth id == current user id

  /* 
  ده انا اللى عامله 
  
  this.formLike=new FormGroup({
      likes:new FormControl('')
    }) */




  /*  if(this.blog.likes?.length!=undefined){
      for(let i = 0;i <this.blog.likes?.length;i++){
        if(this.authintication.getCurrUser()._id == this.blog.likes[i]){
            this.flaglike==true;
        }else{
          this.flaglike==false;
        }
  
      }

 
    }
 
*/



  // if (!this.auth.isAuthenticated) {
  //   const curr = localStorage.getItem('currentUser');
  //   if (curr != null)
  //     this.auth.user = JSON.parse(curr);
  //   else
  //     this.router.navigate(['login']);
  // }}

}
