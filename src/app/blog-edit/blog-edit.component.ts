import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  constructor(private auth :AuthenticationService , private router : Router) { }

  ngOnInit(): void {
    if(!this.auth.authenticated){
      this.router.navigate(['login']);
    }
  }

}
