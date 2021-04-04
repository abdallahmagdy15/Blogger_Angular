import { BlogService } from './../_services/blog.service';
import { Comment } from '../_models/comment';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../_models/blog';
import { AuthenticationService } from '../_services/authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Author } from '../_models/author';
import { faThumbsUp, faComment, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../_services/search.service';


@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog: Blog = this.blogService.selectedBlog
  commentForm: FormGroup = new FormGroup({});
  successMsg = "";
  isSubmitted: boolean; isSuccess = false; isFailed = false; isLoading = false; isDeleting = false;
  isLiked: boolean = false;
  faThumbsUp = faThumbsUp; faComment = faComment; faEdit = faEdit; faTrashAlt = faTrashAlt;
  likesCount: number = 0;
  tags:string[] = [];
  constructor(public blogService: BlogService, public authintication: AuthenticationService,
    public auth: AuthenticationService, private router: Router, private blogsService: BlogService,
    private searchService: SearchService) { }


  ngOnInit(): void {
    const blogid = this.router.url.split('/')[2];
    if (this.blog._id != blogid) {
      this.blogsService.getOneBlog(blogid).subscribe(_blog => {
        this.blog = _blog;
        if (_blog.tags)
          this.tags = _blog.tags;
        this.blogService.selectedBlog = this.blog;
        this.likesCount = (this.blog.likes ? this.blog.likes.length : 0)
        if (this.blog.likes?.includes(this.auth.getCurrUser()._id)) {
          this.isLiked = true;
        }
      })
    }

    this.commentForm = new FormGroup({
      body: new FormControl('', [Validators.required])
    });
  }

  deleteBlog() {
    this.blogService.removeBlog(this.blog._id).subscribe(res => {
      this.isDeleting = false;
      this.isSuccess = true;
      this.successMsg = "Your article was deleted!";
    },
      err => {
        this.isDeleting = false;
        this.isFailed = true;
      }
    );
  }

  onSubmit(form: FormGroup) {

    this.isSubmitted = true;
    if (this.commentForm.invalid) {
      return;
    }
    if (this.auth.isAuthenticated()) {
      this.isLoading = true;
      this.blogService.addComment(form.value, this.blog._id).subscribe(cmnt => {
        console.log(cmnt);
        this.isLoading = false;
        this.isSubmitted = false;
        this.isSuccess = true;
        this.successMsg = "Your Comment posted successfully!";
        this.blog.comments?.push(cmnt as Comment);
      },
        err => {
          console.log(err);
          this.isSubmitted = false;
          this.isLoading = false;
          this.isFailed = true;
        })
    }
  }

  get fieldget() { return this.commentForm.controls; }

  searchByTag(tag: string) {
    this.searchService.query = tag;
    this.searchService.keyword = tag;
    this.searchService.source = "home";
    this.searchService.search();
    this.router.navigate(['/search/home']);
  }

  likeBlog() {
    let likeState = "unlike";
    this.likesCount--;
    if (this.isLiked) {
      likeState = "like";
      this.likesCount += 2;
    }
    this.blogService.likeBlog(this.blog._id, likeState).subscribe(res =>
      console.log(res)
    );
  }
}