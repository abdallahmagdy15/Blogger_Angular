import { Comment } from '../_models/comment';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';
import { Author } from '../_models/author';
import { AuthenticationService } from '../_services/authentication.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(public blogService: BlogService, public authintication: AuthenticationService, public ar: ActivatedRoute, public auth: AuthenticationService, private router: Router) { }
  blog: Blog = this.blogService.selectedBlog
  //blogcomment:Comment=new Comment(new Author('','','','','',''),'','');
  counterComments = this.blog.comments?.length
  flaglike: boolean = false;
  //flagDislike:boolean=true;

  formLike: FormGroup = new FormGroup({});

  Like() {

    //this.flaglike == true;
    this.blogService.addLike(this.blogService.selectedBlog._id).subscribe(a => {
      console.log(a);
    });
  }

  DisLike() {
    //this.flaglike == false;
    this.blogService.unLike(this.blogService.selectedBlog._id).subscribe(a => {
      console.log(a);
    });
  }
  


  ngOnInit(): void {
    //edit remove =>blog auth id == current user id

    /*
    check ==>
      if(this.blogService.selectedBlog.likes?.includes(this.authintication.getCurrUser()._id)){
        this.flaglike == true;
      }else{
        this.flaglike==false;
      }
    */
    
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
