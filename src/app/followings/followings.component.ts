import { UserService } from './../_services/user.service';
import { Author } from './../_models/author';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-followings',
  templateUrl: './followings.component.html',
  styleUrls: ['./followings.component.css']
})
export class FollowingsComponent implements OnInit {
  isFollowers: boolean = false;
  public authors: Author[] = [];
  constructor(private userSevice: UserService, private route: ActivatedRoute, public auth: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    
    let url;
    if (this.route.parent != null)
      url = this.route.parent.snapshot.url;
    if (url != undefined)
      if (url[2].path == "followers") {
        this.isFollowers=true;
        this.userSevice.getFollowers(url[1].path).subscribe(authors => {
          this.authors = authors;
        });
      }
      else {
        this.userSevice.getFollowings(url[1].path).subscribe(authors => {
          this.authors = authors;
        });
      }

  }
}
