import { BlogService } from './../_services/blog.service';
import { Comment } from '../_models/comment';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { AuthenticationService } from '../_services/authentication.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(public blogService: BlogService, public authintication: AuthenticationService,
    public ar: ActivatedRoute, public auth: AuthenticationService, private router: Router, private blogsService: BlogService) { }
  blog: Blog = this.blogService.selectedBlog
  //blogcomment:Comment=new Comment(new Author('','','','','',''),'','');
  counterComments = this.blog.comments?.length
  flaglike: boolean = false;
  flagDislike: boolean = true;

  formLike: FormGroup = new FormGroup({});

  Like() {
    this.flaglike == false;
    this.flagDislike == true;
    //this.blog.likes?.push(this.authintication.getCurrUser()._id);
  }

  DisLike() {
    this.flaglike == true;
    this.flagDislike == false;
  }

  onSubmit(form: FormGroup) {
    if (this.flaglike == false) {
      this.blogService.addLike(this.authintication.getCurrUser()._id).subscribe(a => {

      });
    } else {
      this.blogService.unLike(this.authintication.getCurrUser()._id).subscribe(a => {

      })
    }


  }



  ngOnInit(): void {

    if (this.blog._id == "") {
      this.blogsService.getOneBlog(this.router.url.split('/')[2]).subscribe(_blog => {
        this.blog = _blog;
      })
    }


    //edit remove =>blog auth id == current user id


    console.log(this.blog);

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
    // }
  }
}
