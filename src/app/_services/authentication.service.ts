import { Author } from './../_models/author';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  //private currentUserSubject: BehaviorSubject<Author>;
  //public currentUser: Observable<Author>;
  public user?: Author;
  public secureToken: string = ""
  public isAuthenticated: boolean = false

  constructor(private http: HttpClient) {
    //this.currentUserSubject = new BehaviorSubject<Author>(JSON.parse(localStorage.getItem('currentUser')));
    //this.currentUser = this.currentUserSubject.asObservable();
  }

  // public get currentUserValue(): Author {
  //   return this.currentUserSubject.value;
  // }

  login(username: string, passwprd: string) {
    return this.http.post<Author>('https://iti-blogger.herokuapp.com/users/login', { username, passwprd })
      .pipe(tap(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.user = user;
        //this.currentUserSubject.next(user);
        this.isAuthenticated=true;
        this.secureToken = user.Token?user.Token:"";
        return user;
      }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.user = undefined;
    this.isAuthenticated=false;
    this.secureToken = "";
    //this.currentUserSubject.next(null);
  }

}
