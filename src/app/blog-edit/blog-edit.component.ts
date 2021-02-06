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
    if (!this.auth.isAuthenticated) {
      const curr = localStorage.getItem('currentUser');
      if (curr != null)
        this.auth.user = JSON.parse(curr);
      else
        this.router.navigate(['login']);
    }
  }

}
