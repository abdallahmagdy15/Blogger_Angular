import { BlogService } from './../_services/blog.service';
import { Component, OnInit } from '@angular/core';
import { Blog } from '../_models/blog';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allBlogs:Blog[]=[];
  constructor(private blogService:BlogService,private auth :AuthenticationService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(Mblogs=>{
      this.allBlogs=Mblogs
      //console.log(this.allBlogs);

    })
  }

}
