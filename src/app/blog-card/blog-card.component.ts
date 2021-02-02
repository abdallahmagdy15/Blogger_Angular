import { Comment } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../_models/author';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {

  @Input() blog:Blog=new Blog(new Author('','','','','',''),'','','',new Date(),new Date(),'');
  
  counterComments:number|undefined;

  flag:boolean=false;
  constructor(public blogServices:BlogService) { }
  setSelectedBlog(){
    this.blogServices.selectedBlog=this.blog;
  }

  showDetails(){
    this.flag=true;
 }
 hideDetails(){
this.flag=false
 }
  ngOnInit(): void {
    console.log(this.blog)
    this.blog.Photo='../../assets/blog-119601391_888377995319353_8944912612908572524_o.jpg';
    this.blog.AuthorDp='../../assets/profile-10629561_766049776792856_645984354330777807_n.jpg';
    
  }

}
