import { AuthenticationService } from './authentication.service';
import { Author } from './../_models/author';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient, private auth: AuthenticationService) { 
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.headers.append('authorization', this.auth.secureToken);
  }

  getAuthor(id: string) {
    return this.http.get<Author>('https://iti-blogger.herokuapp.com/users/' + id);
  }
  followAuthor(id: string) {
    return this.http.post('https://iti-blogger.herokuapp.com/users/follow/' + id, {}, { headers: this.headers });
  }
  unfollowAuthor(id: string) {
    return this.http.post('https://iti-blogger.herokuapp.com/users/unfollow/' + id, {}, { headers: this.headers });
  }
  getFollowers(id: string) {
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users/' + id + '/followers', { headers: this.headers });
  }
  getFollowings(id: string) {
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users/' + id + '/followings', { headers: this.headers });
  }

  public getSuggestions() {
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users/suggestions', { headers: this.headers });
  }

  register(author: Author) {
    return this.http.post('https://iti-blogger.herokuapp.com/users/register', author)
  }

}
