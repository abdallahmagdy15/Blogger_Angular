import { BlogService } from './../_services/blog.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';


@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  createBlogForm: FormGroup;
  fileSource: File;

  constructor(
    public auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private blogsService: BlogService
  ) { }

  ngOnInit(): void {
    this.createBlogForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(140)]),
      body: new FormControl('', [Validators.required, Validators.maxLength(140)]),
      photo: new FormControl(''),
      photoSource: new FormControl('')
    })
  }
  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.createBlogForm.patchValue({
        photoSource: file
      });
    }
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.createBlogForm.invalid) {
      return;
    }

    var formData: any = new FormData();
    formData.append("title", this.createBlogForm.get('title')!.value);
    formData.append("body", this.createBlogForm.get('body')!.value);
    const file = this.createBlogForm.get('photoSource')!.value;
    if (file != "")
      formData.append("photo", file);

    this.blogsService.createBlog(formData).subscribe(
      res => {
        console.log(res);
      });

  }
}