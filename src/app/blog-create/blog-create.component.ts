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

  isSubmitted:boolean;
  createBlogForm: FormGroup;
  photoPath: string | ArrayBuffer | null;
  constructor(
    public auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private blogsService: BlogService
  ) { }

  ngOnInit(): void {
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

  onSubmit() {
    this.isSubmitted = true;
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
        alert("Posted Successfully!");
        this.isSubmitted=false;
        console.log(res);
      },
      err=>{
        console.log(err);
      }
      );

  }
}