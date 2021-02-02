import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Blog } from '../_models/blog';

@Injectable({
  providedIn: 'root'
})
export class LocalhomeServiceService {

  getBlogsForAll(){
    return this.http.get<Blog[]>('http://localhost:7000/home');
  }
  getBlogDetails(id:number){
    return this.http.get<Blog>('http://localhost:7000/blogs/'+id);
  }
  
  constructor(public http:HttpClient) { }
}
