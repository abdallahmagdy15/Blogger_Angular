import { Blog } from './../_models/blog';
import { Author } from './../_models/author';
import { SearchService } from './../_services/search.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  authors: Author[] = [];
  blogs: Blog[] = [];

  constructor(private auth: AuthenticationService, private router: Router, private searchService: SearchService) { }

  isBlogs: boolean = true;
  ngOnInit(): void {
    this.searchService.search().subscribe(data => {
      if (data.author == undefined) {//if it`s author array
        this.isBlogs = false;
        this.authors=data;
      }
      else
        this.blogs=data;
    }
    );
  }

}
