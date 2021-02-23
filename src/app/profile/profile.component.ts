import { UserService } from './../_services/user.service';
import { BlogService } from './../_services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from './../_models/author';
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public author: Author = new Author("", "", "", "", "", "");
  public blogs: Blog[] = [];
  public authorid: string = "";
  public loggedInProfile: boolean = false;

  constructor(private router: Router, public auth: AuthenticationService,
    private blogService: BlogService,
    private userService: UserService) { }

  public id:string = this.auth.getCurrUser()._id;

  ngOnInit(): void {
    this.authorid = this.router.url.split('/')[2];
    this.initAuthor();
  }

  initAuthor() {

    if (this.auth.getCurrUser() != undefined && this.authorid == this.auth.getCurrUser().Id) {//if profile of the logged in user
      this.author = this.auth.getCurrUser();
      this.loggedInProfile = true;
    }
    else {
      this.userService.getAuthor(this.authorid).subscribe(author => {
        this.author = author;
        
      });
    }
    this.blogService.getAuthorBlogs(this.authorid).subscribe(blogs => {
      this.blogs = blogs;
      console.log(blogs);
    });
  }

}
