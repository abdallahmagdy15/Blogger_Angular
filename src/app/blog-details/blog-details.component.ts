import { Comment } from '../_models/comment';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../_models/blogs';
import { LocalhomeServiceService } from '../_services/localhome-service.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  constructor(public localhomeservice: LocalhomeServiceService, public ar: ActivatedRoute) { }
  selectedBlog: Blogs = new Blogs();
  blogcomment:Comment=new Comment();
  counterComments:number|undefined;
  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(a => {
      id = a['id'];
      console.log(id);
      this.localhomeservice.getBlogDetails(id).subscribe(myblog => {
      this.selectedBlog = myblog;
       this.counterComments =this.selectedBlog.comments?.length;
         //console.log(this.selectedBlog)
      })
    })
  }
}
