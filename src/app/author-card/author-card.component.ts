import { AuthenticationService } from './../_services/authentication.service';
import { Author } from './../_models/author';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-author-card',
  templateUrl: './author-card.component.html',
  styleUrls: ['./author-card.component.css']
})
export class AuthorCardComponent implements OnInit {
  @Input() author: Author = new Author("", "", "", "", "", "");
  constructor(public userservice: UserService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    if (this.auth.getCurrUser().followings.filter((id: string) => id == this.author._id).length > 0) {
      this.isFollowed = true;
    }
  }
  isFollowed = false;

  follow() {
    this.userservice.followAuthor(this.author._id).subscribe(a => {
      this.isFollowed = true;
      this.auth.updateCurrUser();
      console.log(a);
    },
      err => {
        console.log(err);
      })
  }
  unfollow() {
    this.userservice.unfollowAuthor(this.author._id).subscribe(a => {
      this.isFollowed = false;
      this.auth.updateCurrUser();
      console.log(a);
    },
      err => {
        console.log(err);
      })
  }

}
