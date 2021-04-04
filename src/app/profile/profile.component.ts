import { UserService } from './../_services/user.service';
import { BlogService } from './../_services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from './../_models/author';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { faEdit, faUserFriends, faNewspaper, faBriefcase } from '@fortawesome/free-solid-svg-icons';
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
  faEdit = faEdit;
  faUserFriends = faUserFriends;
  faNewspaper = faNewspaper;
  faBriefcase = faBriefcase;

  constructor(private router: Router, public auth: AuthenticationService,
    private blogService: BlogService,
    private userService: UserService) { }

  public id: string = this.auth.getCurrUser()._id;
  isFollowed = false;
  pageIndex = 0;

  ngOnInit(): void {
    this.authorid = this.router.url.split('/')[2];
    this.initAuthor();
    console.log("ssss ", this.author);
  }

  initAuthor() {
    //if profile of the logged in user
    if (this.auth.getCurrUser() != undefined && this.authorid == this.auth.getCurrUser()._id) {
      this.auth.updateCurrUser();
      this.author = this.auth.getCurrUser();
      this.loggedInProfile = true;
    }
    else {
      this.userService.getAuthor(this.authorid).subscribe(author => {
        this.author = author;
      });
    }
    this.getBlogs();
    if (!this.loggedInProfile)
      if (this.auth.getCurrUser().followings.filter((id: string) => id == this.author._id).length > 0) {
        this.isFollowed = true;
      }
  }

  follow() {
    this.userService.followAuthor(this.author._id).subscribe(a => {
      this.isFollowed = true;
      this.auth.updateCurrUser();
      console.log(a);
    },
      err => {
        console.log(err);
      })
  }
  unfollow() {
    this.userService.unfollowAuthor(this.author._id).subscribe(a => {
      this.isFollowed = false;
      this.auth.updateCurrUser();
      console.log(a);
    },
      err => {
        console.log(err);
      })
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  isLoading = false;

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (!this.isLoading)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.pageIndex++;
        this.getBlogs();
      }
  }
  getBlogs() {
    this.isLoading = true;
    this.blogService.getAuthorBlogs(this.authorid, this.pageIndex).subscribe(blogs => {
      this.blogs = blogs;
      this.isLoading = false;
    });
  }

}
