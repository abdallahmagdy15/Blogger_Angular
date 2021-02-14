import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Author } from '../_models/author';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editProfileForm: FormGroup;
  constructor(public auth: AuthenticationService, public userService: UserService) { }
  mData: Author = this.auth.getCurrUser();

  onSubmit(form: FormGroup) {

    if (form.value.firstName != undefined || form.value.firstName != "")
      this.mData.firstName = form.value.firstName;

    if (form.value.lastName != undefined || form.value.lastName != "")
      this.mData.lastName = form.value.lastName;

    if (form.value.gender != undefined || form.value.firstName != "")
      this.mData.gender = form.value.gender;

    if (form.value.dob != undefined || form.value.dob != "")
      this.mData.dob = form.value.dob;

    if (form.value.bio != undefined || form.value.bio != "")
      this.mData.bio = form.value.bio;

    if (form.value.email != undefined || form.value.email != "")
      this.mData.email = form.value.email;

    if (form.value.jobTitle != undefined || form.value.jobTitle != "")
      this.mData.jobTitle = form.value.jobTitle;

    if (form.value.password != undefined || form.value.firstName != "")
      this.mData.password = form.value.password;


    this.userService.editProfile(this.mData).subscribe(a => {
      //this.auth.currentUser=a;
      console.log(a);
    })

    //console.log(this.auth.getCurrUser());


  }
  ngOnInit(): void {
    console.log(this.auth.getCurrUser());
    this.editProfileForm = new FormGroup({
      email: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      gender: new FormControl(''),
      jobTitle: new FormControl(''),
      dob: new FormControl(''),
      bio: new FormControl(''),
      password: new FormControl('')
    })

  }

}
