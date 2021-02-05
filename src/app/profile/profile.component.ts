import { BlogService } from './../_services/blog.service';
import { Router } from '@angular/router';
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

  @Input() author?: Author;
  private loggedInProfile: boolean = false;
  private authorBlogs:Blog[]=[];

  constructor(private router:Router,private auth: AuthenticationService,private blogService:BlogService) { }

  ngOnInit(): void {
    if(!this.auth.authenticated){
      this.router.navigate(['login']);
    }
    else if (this.author == undefined) {
      this.author = this.auth.user;
      this.loggedInProfile = true;
    }
    this.blogService.getAuthorBlogs(this.author.Id).subscribe(blogs=>{

    });
  }

}
