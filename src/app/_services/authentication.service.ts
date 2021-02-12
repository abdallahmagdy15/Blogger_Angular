import { Author } from './../_models/author';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  public getCurrUser() {
    const currUser = localStorage.getItem('currentUser');
    if (currUser != null){
      return JSON.parse(currUser);
    }
    else{
       const author = new Author('', '', '', '', '', '',);
       author.token="";
       return author;

    }
  }
  private isTokenExpired(token: string) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }
  public isAuthenticated(): boolean {
    return !this.isTokenExpired(this.getToken());
  }
  public getToken(): string {
    return this.getCurrUser().token;
  }
  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    return this.http.post<Author>('https://iti-blogger.herokuapp.com/users/login', { username, password })
      .pipe(tap(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
  }

}
