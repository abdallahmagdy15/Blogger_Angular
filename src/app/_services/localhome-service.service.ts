import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blogs } from '../_models/blogs';

@Injectable({
  providedIn: 'root'
})
export class LocalhomeServiceService {

  getBlogsForAll(){
    return this.http.get<Blogs[]>('http://localhost:7000/home');
  }
  getBlogDetails(id:number){
    return this.http.get<Blogs>('http://localhost:7000/blogs/'+id);
  }
  
  constructor(public http:HttpClient) { }
}
