import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(' http://localhost:3000/posts').pipe(map((res:any)=>{
return res;
    }))
  }

postData(user:any){
  return this.http.post('http://localhost:3000/posts',user).pipe(map((res:any)=>{
    return res;
  }))
}
updateData(user:any, id:any){
  return this.http.put( "http://localhost:3000/posts/"+user.id,user).pipe(map((res:any)=>{
    return res;
      }));
}
deleteData(user:any){
  return this.http.delete('http://localhost:3000/posts/'+user.id);
}
}
