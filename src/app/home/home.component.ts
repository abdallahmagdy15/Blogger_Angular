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

    this.blogService.getBlogs().subscribe(blogs => {
      for (let b of blogs) {
        this.allBlogs.push(new Blog(b._Author, b.Id, b.Title, b.Body, b.CreatedAt, b.UpdatedAt, b.AuthorName));
      }
    })
  }

}
