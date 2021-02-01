import { Comment } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Blogs } from '../_models/blogs';
import { LocalhomeServiceService } from '../_services/localhome-service.service';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input() blog:Blogs=new Blogs()
  counterComments:number|undefined;

  flag:boolean=false;
  constructor() { }

  showDetails(){
    this.flag=true;
 }
 hideDetails(){
this.flag=false
 }
  ngOnInit(): void {
    
  }

}
