import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  title = 'Blogger';
  /**
   *
   */
  constructor(private auth: AuthenticationService) {
  }
  ngOnInit() {
    this.auth.login("ahmeds", "123456").subscribe(u => {
      console.log("login done " , this.auth.isAuthenticated());
    });
  }
}
