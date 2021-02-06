import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  constructor(private auth :AuthenticationService , private router : Router) { }

  ngOnInit(): void {
    if(!this.auth.isAuthenticated){
      this.router.navigate(['login']);
    }
  }

}
