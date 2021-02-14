import { AuthenticationService } from './authentication.service';
import { Author } from './../_models/author';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { 
  }

  getAuthor(id: string) {
    return this.http.get<Author>('https://iti-blogger.herokuapp.com/users/' + id);
  }
  followAuthor(id: string) {
    return this.http.post('https://iti-blogger.herokuapp.com/users/follow/' + id, {});
  }
  unfollowAuthor(id: string) {
    return this.http.post('https://iti-blogger.herokuapp.com/users/unfollow/' + id, {});
  }
  getFollowers(id: string) {
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users/' + id + '/followers');
  }
  getFollowings(id: string) {
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users/' + id + '/followings');
  }

  public getSuggestions() {
    return this.http.get<Author[]>('https://iti-blogger.herokuapp.com/users/suggestions/list');
  }

  register(author: Author) {
    return this.http.post('https://iti-blogger.herokuapp.com/users/register', author)
  }

  editProfile(author:any) {
    return this.http.patch<any>('https://iti-blogger.herokuapp.com/users/', author)
  }

}
