import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Author } from '../_models/author';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  author: Author;
  editProfileForm: FormGroup;
  dp: string | ArrayBuffer | null = '../assets/male_dp.jpg';
  isSubmitted: boolean; isSuccess = false; isFailed = false; isLoading = false;
  error: string = "";

  constructor(public auth: AuthenticationService, public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    const id = this.router.url.split('/')[2];
    this.userService.getAuthor(id).subscribe(u => {
      this.author = u;
      if (this.author.dp)
      this.dp = this.author.dp;
    });

    this.editProfileForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(140)]),
      firstName: new FormControl('', [Validators.required, Validators.maxLength(140)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(140)]),
      jobTitle: new FormControl('', [Validators.required, Validators.maxLength(140)]),
      dob: new FormControl('', [Validators.required]),
      bio: new FormControl(''),
      dp: new FormControl(''),
      dpSource: new FormControl('')
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
        this.dp = reader.result;
      }
      this.editProfileForm.patchValue({
        dpSource: file
      });
    }
  }
  get fieldget() { return this.editProfileForm.controls; }

  onSubmit() {
    this.isSubmitted = true;
    // stop here if form is invalid
    if (this.editProfileForm.invalid || this.isLoading) {
      return;
    }

    var formData: any = new FormData();
    formData.append("firstName", this.editProfileForm.get('firstName')!.value);
    formData.append("lastName", this.editProfileForm.get('lastName')!.value);
    formData.append("dob", this.editProfileForm.get('dob')!.value);
    formData.append("bio", this.editProfileForm.get('bio')!.value);
    formData.append("email", this.editProfileForm.get('email')!.value);
    formData.append("jobTitle", this.editProfileForm.get('jobTitle')!.value);

    const file = this.editProfileForm.get('dpSource')!.value;
    if (file != "")
      formData.append("dp", file);

    this.isLoading = true;

    this.userService.editProfile(formData).subscribe(res => {
      this.isLoading = false;
      this.isSubmitted = false;
      this.isSuccess = true;
      this.auth.updateCurrUser();
    },
      err => {
        console.log(err);
        this.isSubmitted = false;
        this.isLoading = false;
        this.error = err;
        this.isFailed = true;
      })

  }


}
