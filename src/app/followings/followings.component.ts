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
    const url = this.route.snapshot.url;
    if(url[0].path.toString() == "followings"){
        this.userSevice.getFollowings(this.auth.getCurrUser()._id).subscribe(authors => {
          this.authors = authors;
        });
      }
      else if(url[0].path.toString() == "followers")
      {
        this.isFollowers=true;
        this.userSevice.getFollowers(this.auth.getCurrUser()._id).subscribe(authors => {
          this.authors = authors;
          //console.log(authors);
        });
      }
      else if(url[2].path.toString() == "followings") {
        this.userSevice.getFollowers(url[1].path.toString()).subscribe(authors => {
          this.authors = authors;
        });
      }
      else if(url[2].path.toString() == "followers") {
        this.isFollowers=true;
        this.userSevice.getFollowers(url[1].path.toString()).subscribe(authors => {
          this.authors = authors;
        });
      }

      

  }
}
