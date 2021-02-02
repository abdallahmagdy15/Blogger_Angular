import { AuthenticationService } from './authentication.service';
import { Author } from './../_models/author';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getAuthor(id: number) {
    return this.http.get<Author>('https://iti-blogger.herokuapp.com/users/' + id);
  }
  followAuthor(id: number) {
    return this.http.post('https://iti-blogger.herokuapp.com/users/follow/' + id, {}, { headers: { authorization: this.auth.secureToken } });
  }
  unfollowAuthor(id: number) {
    return this.http.post('https://iti-blogger.herokuapp.com/users/unfollow/' + id, {}, { headers: { authorization: this.auth.secureToken } });
  }
  getFollowers(id: number) {
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users/' + id + '/followers', { headers: { authorization: this.auth.secureToken } });
  }
  getFollowings(id: number) {
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users/' + id + '/followings', { headers: { authorization: this.auth.secureToken } });
  }
  register(author: Author) {
    return this.http.post('https://iti-blogger.herokuapp.com/users/register', author)
  }

}
