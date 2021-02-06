import { Author } from './../_models/author';
import { UserService } from './../_services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  private authors: Author[] = [];
  constructor(private userSevice: UserService, private router: Router, private auth: AuthenticationService) { }

  ngOnInit(): void {
    if (!this.auth.isAuthenticated) {
      this.router.navigate(['login']);
    }
    this.userSevice.getSuggestions().subscribe(authors => {
      this.authors = authors;
    });
  }

}
