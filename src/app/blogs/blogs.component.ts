import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  
  @Input() blogs:Blog[]=[] 
  //selectedBlogs:number[]=[];
  constructor() { }

  ngOnInit(): void {
    if(!this.auth.authenticated){
      this.router.navigate(['login']);
    }
  }

}
