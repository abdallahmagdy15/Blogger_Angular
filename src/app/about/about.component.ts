import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private auth :AuthenticationService , private router : Router) { }

  ngOnInit(): void {
    if(!this.auth.authenticated){
      this.router.navigate(['login']);
    }
  }

}
