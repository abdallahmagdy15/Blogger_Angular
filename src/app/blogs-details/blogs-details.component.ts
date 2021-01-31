import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogs } from '../_models/blogs';
import { LocalhomeServiceService } from '../_services/localhome-service.service';

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.component.html',
  styleUrls: ['./blogs-details.component.css']
})
export class BlogsDetailsComponent implements OnInit {

  constructor(public localhomeservice: LocalhomeServiceService, public ar: ActivatedRoute) { }
  selectedBlog: Blogs = new Blogs('', '', '', '', '', '', [''], new Date(), 0)
  ngOnInit(): void {
    let id = 0;
    this.ar.params.subscribe(a => {
      id = a['id'];
      console.log(id);
      this.localhomeservice.getBlogDetails(id).subscribe(myblog => {
        this.selectedBlog = myblog;
        console.log(this.selectedBlog)
      })
    })
  }

}
