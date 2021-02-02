import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public secureToken: string = ""
  public authenticated: boolean = false

  constructor(private http: HttpClient) { }

  login(username: string, passwprd: string) {
    return this.http.post('https://iti-blogger.herokuapp.com/users/login', { username, passwprd })
  }

}
