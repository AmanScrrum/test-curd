import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getEmployee(){
    return this.http.get('http://localhost:3000/posts').pipe(map((res)=>{
      return res;
    }))
}

  postEmployee(user:any){
   return this.http.post('http://localhost:3000/posts',user).pipe(map((res:any)=>{
     return res;
   }))

  }
  updateEmpolyee(user:any, id:any){
    return this.http.put( "http://localhost:3000/posts/"+user.id,user).pipe(map((res:any)=>{
      return res;
        }))
  }
  deleteEmployee(user:any){
      return this.http.delete('http://localhost:3000/posts/'+user.id);
    }
}
