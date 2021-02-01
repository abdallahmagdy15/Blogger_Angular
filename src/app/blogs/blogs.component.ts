import { Component, OnInit } from '@angular/core';
import { Blogs } from '../_models/blogs';
import { LocalhomeServiceService } from '../_services/localhome-service.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  
  allBlogs:Blogs[]=[];
  selectedBlogs:number[]=[];
  constructor(public localhomeservice:LocalhomeServiceService) { }

  ngOnInit(): void {
    this.localhomeservice.getBlogsForAll().subscribe(Mblogs=>{
      console.log(Mblogs);
      this.allBlogs=Mblogs
    })
  }

}
