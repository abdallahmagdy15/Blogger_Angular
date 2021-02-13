import { Comment } from '../_models/comment';
import { Component, Input, OnInit } from '@angular/core';
import { Author } from '../_models/author';
import { Blog } from '../_models/blog';
import { BlogService } from '../_services/blog.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css']
})
export class CommentCardComponent implements OnInit {

  @Input() comment: Comment = new Comment('',new Author('', '', '', '', '', ''), '', '', new Date(), new Date());

  constructor(public blogService: BlogService, public auth: AuthenticationService
    , private router: Router
  ) { }
  isLiked: boolean = false;
  likesCount: number = 0;
  ngOnInit(): void {
    if (this.comment.likes?.includes(this.auth.getCurrUser()._id)) {
      this.isLiked = true;
    }
    this.likesCount = (this.comment.likes ? this.comment.likes.length : 0)
  }

  likeComment() {
    let likeState = "unlike";
    this.likesCount--;
    if (this.isLiked) {
      likeState = "like";
      this.likesCount += 2;
    }

    this.blogService.likeComment(this.router.url.split('/')[2],this.comment._id, likeState).subscribe(res =>
      console.log(res)
    );
  }
}
