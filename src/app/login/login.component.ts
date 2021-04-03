/**
 * The login component uses the authentication service to login to the application. 
 * If the user is already logged in they are automatically redirected to the home page.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';

import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;  //loginForm!: this tells TS that the value will be assigned at runtime.
  loading = false;
  submitted = false;
  returnUrl!: string;     //returnUrl!: this tells TS that the value will be assigned at runtime.
  rememberMe: boolean=true;
  isWrongCreds=false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public auth: AuthenticationService,
    private alertService: AlertService,
  ) {
    // redirect to home if already logged in
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/']);
    }

  }

  ngOnInit(): void {
    /** object defines the form controls and validators,
     * and is used to access data entered into the form
     * Construct a new FormGroup instance. Returns FormGroup
    */

    console.log('remember me : ',this.rememberMe );

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get fieldget() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    /**
     * bind the remember me value to a model and save to local storage, do a check in the autoLogin()
     * non-null assertion operator :
     * It tells TypeScript that even though something looks like it could be null, 
     * it can trust you that it's not and validate the empty string.
     */
    this.loading = true;  // loading Spinner= true.
    this.auth.login(this.fieldget.username.value, this.fieldget.password.value, this.rememberMe)
      .pipe(first()) // first(): operator takes an optional predicate function and emits an error notification when no value matched when the source completed.
      .subscribe(
        data => {
          // Save value to local storage
          if (this.rememberMe) {
            localStorage.setItem('rememberMe', 'yes')
          }
          this.alertService.success('Successfully Login', true);
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.isWrongCreds=true;
          this.loading = false; // loading Spinner= false.
        });
  }
}
