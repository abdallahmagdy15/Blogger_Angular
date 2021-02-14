import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
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
  constructor(public auth: AuthenticationService, public userService: UserService) { }

  ngOnInit(): void {
    this.author = this.auth.getCurrUser()
    this.editProfileForm = new FormGroup({
      email: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      jobTitle: new FormControl(''),
      dob: new FormControl(''),
      bio: new FormControl(''),
      dp: new FormControl(''),
      dpSource: new FormControl('')
    })

  }

  uploadFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.editProfileForm.patchValue({
        dpSource: file
      });
    }
  }

  onSubmit() {

    // stop here if form is invalid
    if (this.editProfileForm.invalid) {
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

    this.userService.editProfile(formData).subscribe(a => {
      console.log(a);
    })

  }


}
