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
  constructor(public userservice:UserService) { }

 
  
  follow(){
    this.userservice.followAuthor(this.author._id).subscribe(a=>{

    })
  }
  unfollow(){
    this.userservice.unfollowAuthor(this.author._id).subscribe(a=>{
      
    })
  }

  ngOnInit(): void {
  }

}
