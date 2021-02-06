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

  private author: Author = new Author("", "", "", "", "", "");
  private blogs: Blog[] = [];
  private authorid: string = "";
  private loggedInProfile: boolean = false;
  private authorBlogs: Blog[] = [];

  constructor(private router: Router, private auth: AuthenticationService,
    private blogService: BlogService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (!this.auth.isAuthenticated) {
      this.router.navigate(['login']);
    }
    this.route.queryParams.subscribe(params => {
      this.authorid = params['authorid'];
      this.initAuthor()
    });

  }
  initAuthor() {

    if (this.authorid == this.auth.user.Id) {//if profile of the logged in user
      this.author = this.auth.user;
      this.loggedInProfile = true;
    }
    else {
      this.userService.getAuthor(this.authorid).subscribe(author => {
        this.author = author;
      });
    }
    this.blogService.getAuthorBlogs(this.author.Id).subscribe(blogs => {
      this.blogs = blogs;
    });
  }

}
