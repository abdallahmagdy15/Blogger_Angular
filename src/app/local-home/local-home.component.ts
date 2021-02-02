import { Component, OnInit } from '@angular/core';
import { Blog } from '../_models/blog';
import { LocalhomeServiceService } from '../_services/localhome-service.service';

@Component({
  selector: 'app-local-home',
  templateUrl: './local-home.component.html',
  styleUrls: ['./local-home.component.css']
})
export class LocalHomeComponent implements OnInit {
  allBlogs:Blog[]=[];
  selectedBlogs:number[]=[];
  constructor(public localhomeservice:LocalhomeServiceService) { }

  flagshow:boolean=false;

  showDetails(a:number){
     this.selectedBlogs.push(a);
   // this.flagshow=true;
  }
  hideDetails(a:number){
    this.selectedBlogs=this.selectedBlogs.filter(item=>item!==a)
    //this.flagshow=false;
  }
  ngOnInit(): void {
    this.localhomeservice.getBlogsForAll().subscribe(Mblogs=>{
      console.log(Mblogs);
      this.allBlogs=Mblogs
    })
  }

}
