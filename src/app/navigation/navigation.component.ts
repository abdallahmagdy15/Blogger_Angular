import { Author } from './../_models/author';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  author: Author = new Author('', '', '', '', '', '');
  isAuth: boolean = false;
  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
    if (this.auth.user != undefined)
      this.author = this.auth.user;
    this.isAuth = this.auth.isAuthenticated
  }

}
