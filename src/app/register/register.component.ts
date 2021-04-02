// The register component creates a new user with the user service when the register form is submitted.
// If the user is already logged in they are automatically redirected to the home page.
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service'
import { AlertService } from '../_services/alert.service'
import { MustMatch } from '../_helpers/MustMatch';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  /** object defines the form controls and validators,
   * and is used to access data entered into the form
   * Construct a new FormGroup instance. Returns FormGroup
  */
  registerForm: FormGroup = this.formBuilder.group({});
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public auth: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService
  ) {

  }
  get fieldget() { return this.registerForm.controls; }

  ngOnInit(): void {
    /**
     *  controlsConfig Object :
     * 	A collection of child controls. The key for each child is the name under which it is registered.
     */
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(140)]],
      lastName: ['', [Validators.required, Validators.maxLength(140)]],
      username: ['', [Validators.required, Validators.maxLength(140)]],
      gender: ['', Validators.required],
      jobTitle: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),Validators.maxLength(140)]],
      confirmPassword: ['', [Validators.required]]
    },{
        validator: MustMatch('password', 'confirmPassword')
      }
    );
  }




  onSubmit(registerForm: FormGroup) {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (registerForm.invalid) {
      return;
    }

    this.loading = true; // loading Spinner= true.
    console.log(registerForm.value);
    this.userService.register(registerForm.value)
      .pipe(first()) // first(): operator takes an optional predicate function and emits an error notification when no value matched when the source completed.
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false; // loading Spinner= false.
        });
  }

}
