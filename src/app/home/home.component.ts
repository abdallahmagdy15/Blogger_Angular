import { BlogService } from './../_services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../_models/blog';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBlogs:Blog[]=[];
  constructor(private blogService:BlogService,private router:Router,private auth :AuthenticationService) { }

  ngOnInit(): void {
    //*******needs updating */
    if (!this.auth.isAuthenticated) {
      const curr = localStorage.getItem('currentUser');
      if (curr != null)
        this.auth.user = JSON.parse(curr);
      else
        this.router.navigate(['login']);
    }
    //end
    this.blogService.getBlogs().subscribe(Mblogs=>{
      this.allBlogs=Mblogs
      //console.log(this.allBlogs);

    })
  }

}
