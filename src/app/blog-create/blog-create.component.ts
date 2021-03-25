import { Router } from '@angular/router';
import { BlogService } from './../_services/blog.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  faUpload = faUpload;
  isSubmitted: boolean; isSuccess = false; isFailed = false; isLoading = false;
  error: string = "";
  createBlogForm: FormGroup;
  photoPath: string | ArrayBuffer | null;
  tags: string[] = [];

  constructor(
    private router: Router,
    public auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private blogsService: BlogService
  ) { }

  ngOnInit(): void {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/login']);
    }
    this.createBlogForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(140)]),
      body: new FormControl('', [Validators.required, Validators.maxLength(3000)]),
      photo: new FormControl(''),
      photoSource: new FormControl('')
    })
  }

  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      var mimeType = file.type;
      if (mimeType.match(/image\/*/) == null) {
        alert("Only images are supported.");
        return;
      }
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.photoPath = reader.result;
      }
      this.createBlogForm.patchValue({
        photoSource: file
      });
    }
  }

  get fieldget() { return this.createBlogForm.controls; }

  removeTag(tag: any) {
    this.tags = this.tags.filter(t => t != tag)
  }

  onSubmit() {
    this.isSubmitted = true;
    // stop here if form is invalid
    if (this.createBlogForm.invalid || this.isLoading) {
      return;
    }

    var formData: any = new FormData();
    formData.append("title", this.createBlogForm.get('title')!.value);
    formData.append("body", this.createBlogForm.get('body')!.value);
    if (this.tags.length > 0)
      formData.append("tags", JSON.stringify(this.tags));

    const file = this.createBlogForm.get('photoSource')!.value;
    if (file != "")
      formData.append("photo", file);

    this.isLoading = true;
    this.blogsService.createBlog(formData).subscribe(
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