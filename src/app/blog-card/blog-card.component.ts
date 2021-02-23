import { AuthenticationService } from './../_services/authentication.service';
import { Comment } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../_models/author';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';
import { faThumbsUp , faComment } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input() blog:Blog=new Blog(new Author('','','','','',''),'','','',new Date(),new Date(),'');
  
  counterComments:number|undefined;
  faThumbsUp = faThumbsUp;
  faComment = faComment;
  
  flag:boolean=false;

  constructor(public blogServices:BlogService,public auth:AuthenticationService) { }
  setSelectedBlog(){
    this.blogServices.selectedBlog=this.blog;
    //console.log(this.blog);
  }

  showDetails(){
    this.flag=true;
 }
 hideDetails(){
this.flag=false
 }
  ngOnInit(): void {
  }

}
