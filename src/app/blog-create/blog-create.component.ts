import { BlogService } from './../_services/blog.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  createBlogForm: FormGroup;
  constructor(
    public auth: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private blogsService: BlogService
  ) { }

  ngOnInit(): void {
    this.createBlogForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(140)]),
      body: new FormControl('', [Validators.required, Validators.maxLength(140)]),
      photo: new FormControl('')
    })
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.createBlogForm.invalid) {
      return;
    }
    this.blogsService.createBlog( this.createBlogForm.value).subscribe(res => {
      console.log(res);
    });

  }

}
