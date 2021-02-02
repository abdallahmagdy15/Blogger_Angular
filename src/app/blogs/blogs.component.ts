import { Component, OnInit } from '@angular/core';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  
  allBlogs:Blog[]=[];
  //selectedBlogs:number[]=[];
  constructor(public blogService:BlogService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe(Mblogs=>{
      this.allBlogs=Mblogs
      //console.log(this.allBlogs);

    })
  }

}
