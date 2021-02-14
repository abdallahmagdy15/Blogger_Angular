import { BlogService } from './../_services/blog.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

  createBlogForm: FormGroup;
  fileSource: File ;

  constructor(
    private http: HttpClient,
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
  
  fileProgress(fileInput: any) {
      this.fileSource = <File>fileInput.target.files[0];
  }

  onSubmit(){
    // stop here if form is invalid
    if (this.createBlogForm.invalid) {
      return;
    }
    this.blogsService.createBlog(this.createBlogForm.value).subscribe(
      res => {
      console.log(res);
      });

    const formData = new FormData();
    formData.append('file', this.fileSource);
    //this.http.post<any>('https://api.cloudinary.com/v1_1/" + cloudinary.config().cloud_name + "/upload', formData)
    this.http.post('http://localhost:4200/create-blog/', formData)
      .subscribe(res => {
        console.log(res);
        alert('Uploaded Successfully.');
      })
  
  
}
}