import { Comment } from '../_models/comment';
import { Component, OnInit } from '@angular/core';
import { Author } from '../_models/author';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  constructor(public blogService:BlogService ) { }

  blog: Blog = this.blogService.selectedBlog
  blogcomment:Comment=new Comment(new Author('','','','','',''),'','');
  counterComments = this.blog.comments?.length

  ngOnInit(): void {
    
  }

}
