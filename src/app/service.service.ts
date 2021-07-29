import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getUser(){
    // return this.http.get('https://jsonplaceholder.typicode.com/posts');
    return this.http.get('http://localhost:3000/posts').pipe(map((res:any)=>{
  return res;
  }))
}

  postUser(data:any){
  return this.http.post('http://localhost:3000/posts',data).pipe(map((res:any)=>{
return res;
  }))
  } 
  deleteUser(user:any){
    return this.http.delete('http://localhost:3000/posts/'+user.id)
  }
  updateUser(user:any, id:any ){
 return this.http.put( "http://localhost:3000/posts/"+user.id,user).pipe(map((res:any)=>{
  return res;
    }));
  }
  
}
