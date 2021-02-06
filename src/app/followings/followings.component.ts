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

  private authors: Author[] = [];
  constructor(private userSevice: UserService, private route: ActivatedRoute, private auth: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.auth.isAuthenticated) {
      const curr = localStorage.getItem('currentUser');
      if (curr != null)
        this.auth.user = JSON.parse(curr);
      else
        this.router.navigate(['login']);
    }
    
    if(this.route.snapshot.toString() == "followers"){///******************* needs to be replaced with right logic******** */
      this.userSevice.getFollowers().subscribe(authors => {
        this.authors = authors;
      });
    }
    else{

    }
    
  }
}
