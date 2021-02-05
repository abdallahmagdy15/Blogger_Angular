import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private auth :AuthenticationService , private router : Router) { }

  ngOnInit(): void {
    if(!this.auth.authenticated){
      this.router.navigate(['login']);
    }
  }

}
