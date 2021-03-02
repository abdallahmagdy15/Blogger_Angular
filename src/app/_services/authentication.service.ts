import { UserService } from './user.service';
import { Router } from '@angular/router';
/**
 * The authentication service is used to login and logout of the application, 
 * to login it posts the users credentials to the api and checks the response for a JWT token, 
 * if there is one it means authentication was successful so the user details including 
 * the token are added to local storage.
 */
import { Author } from './../_models/author';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  currentUser: Author;

  public updateCurrUser() {
    this.http.get<Author>('https://iti-blogger.herokuapp.com/users/' +
      this.getCurrUser()._id).subscribe(user => {
        user.token = this.getToken();
        localStorage.setItem('currentUser', JSON.stringify(user));
      });;
  }

  public getCurrUser() {
    const currUser = localStorage.getItem('currentUser');
    if (currUser != null)
      return JSON.parse(currUser);

    else if (this.currentUser != undefined)
      return this.currentUser;

    else {
      const author = new Author('', '', '', '', '', '',);
      author.token = "";
      return author;
    }
  }

  private isTokenExpired(token: string) {
    if (token == '')
      return true;
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  public isAuthenticated(): boolean {
    return !this.isTokenExpired(this.getToken());
  }

  public getToken(): string {
    return this.getCurrUser().token;
  }
  constructor(private http: HttpClient, private router: Router) { }


  login(username: string, password: string, isRememberme: boolean) {
    return this.http.post<Author>('https://iti-blogger.herokuapp.com/users/login', { username, password })
      .pipe(tap(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        if (isRememberme)
          localStorage.setItem('currentUser', JSON.stringify(user));
        else
          localStorage.clear();
          
        this.currentUser = user;

        return user;
      }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUser = new Author('', '', '', '', '', '');
    this.currentUser.token = "";
    this.router.navigate(['/login']);
  }

}
