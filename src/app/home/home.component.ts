import { BlogService } from './../_services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../_models/blog';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBlogs: Blog[] = [];
  constructor(private blogService: BlogService, private router: Router, public auth: AuthenticationService) { }

  ngOnInit(): void {

    //dont fix ..this works 
    this.blogService.getBlogs().subscribe(blogs => {
      for (let b of blogs) {
        this.allBlogs.push(new Blog(b.author, b.id, b.title, b.body, b.createdAt, b.updatedAt, b.authorName,
          b.authorDp, b.photo, b.tags, b.likes, b.comments));
      }
    })
  }

}
