import { SearchService } from './../_services/search.service';
import { BlogService } from './../_services/blog.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { Blog } from '../_models/blog';
import { AuthenticationService } from '../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBlogs: Blog[] = [];
  constructor(private blogService: BlogService, private route: ActivatedRoute, public auth: AuthenticationService) { }
  isLoading = false;
  pageIndex = 0;

  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs() {
    this.isLoading = true;
    if (this.route.snapshot.url[0].path.toString() == "followings-blogs")
      this.blogService.getFollowingsBlogs(this.pageIndex).subscribe(blogs => {
        for (let b of blogs) {
          this.allBlogs.push(new Blog(b.author, b._id, b.title, b.body, b.createdAt, b.updatedAt, b.authorName,
            b.authorDp, b.photo, b.tags, b.likes, b.comments));
        }
        this.isLoading = false;
      })
    else
      this.blogService.getBlogs(this.pageIndex).subscribe(blogs => {
        for (let b of blogs) {
          this.allBlogs.push(new Blog(b.author, b._id, b.title, b.body, b.createdAt, b.updatedAt, b.authorName,
            b.authorDp, b.photo, b.tags, b.likes, b.comments));
        }
        this.isLoading = false;
      })
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    if (!this.isLoading)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.pageIndex++;
        this.getBlogs();
      }
  }
}
