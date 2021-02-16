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

  constructor(private auth: AuthenticationService, private router: Router, public searchService: SearchService) { }

  ngOnInit(): void {
    
  }

}
