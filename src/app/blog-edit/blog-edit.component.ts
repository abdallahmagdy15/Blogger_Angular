import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../_services/blog.service';
import { Blog } from '../_models/blog';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  isSubmitted: boolean; isSuccess = false; isFailed = false; isLoading = false;
  error: string = "";
  editBlogForm: FormGroup;
  photoPath: string | ArrayBuffer | null;
  tags: string[] = [];
  blog: Blog = this.blogsService.selectedBlog
  
  constructor(
    private router: Router,
    public auth: AuthenticationService,
    private formBuilder: FormBuilder,
    public blogsService: BlogService
  ) { }

  ngOnInit(): void {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
    const blogid = this.router.url.split('/')[2];
    this.blogsService.getOneBlog(blogid).subscribe(_blog => {
      this.blog = _blog;
      if (this.blog.tags != undefined) {
        this.tags = this.blog.tags;
        // let _tags: string[] = JSON.parse(this.blog.tags![0])
        // _tags.forEach(t => {
        //   this.tags.push(t);
        // });
      }
    });

    this.editBlogForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(140)]),
      body: new FormControl('', [Validators.required, Validators.maxLength(3000)])
    })

  }

  get fieldget() { return this.editBlogForm.controls; }

  removeTag(tag: any) {
    this.tags = this.tags.filter(t => t != tag)
  }

  onSubmit() {
    this.isSubmitted = true;
    // stop here if form is invalid
    if (this.editBlogForm.invalid || this.isLoading) {
      return;
    }
    this.blog.title = this.editBlogForm.get('title')!.value;
    this.blog.body = this.editBlogForm.get('body')!.value;
    if (this.tags.length > 0)
      this.blog.tags = this.tags;

    this.isLoading = true;
    this.blogsService.updateBlog(this.blog, this.blog._id).subscribe(
      res => {
        this.isLoading = false;
        this.isSubmitted = false;
        this.isSuccess = true;
      },
      err => {
        console.log(err);
        this.isSubmitted = false;
        this.isLoading = false;
        this.error = err;
        this.isFailed = true;
      }
    );

  }

}
