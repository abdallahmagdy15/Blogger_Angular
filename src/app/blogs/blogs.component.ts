import { UserService } from './../_services/user.service';
import { BlogService } from './../_services/blog.service';
import { Component, OnInit, Input } from '@angular/core';
import { Blog } from '../_models/blog';
import { AuthenticationService } from '../_services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  
  @Input() blogs:Blog[]=[] 
  //selectedBlogs:number[]=[];
  constructor(private router: Router, public auth: AuthenticationService,
    private blogService: BlogService,
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
