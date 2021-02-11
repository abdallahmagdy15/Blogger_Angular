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
  constructor(public auth: AuthenticationService) { }

  ngOnInit(): void {
    if (this.auth.getCurrUser() != undefined)
      this.author = this.auth.getCurrUser();
  }

}
