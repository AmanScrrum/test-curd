import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../../service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userModel } from 'src/app/app.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userModelobj: userModel= new userModel()
  user: any;
myForm:FormGroup;
id:any;
  data: any;
  formData: any;
  constructor(private http:HttpClient, private service:ServiceService, private fb: FormBuilder) {
    this.myForm= this.fb.group({
     id:['',[ Validators.required]],
     userId: ['',[ Validators.required]],
     body: ['',[ Validators.required]],
     title: ['',[ Validators.required]],
    })
  }

  ngOnInit(): void {
    this.getUser();
  }
getUser(){
 this.service.getUser().subscribe(res=>{
   console.log(res);
   if(res){
     this.user=res;
   }
 })
}

postUser(){
  // this.userModelObj= this.myForm.value
  
  this.formData= this.myForm.getRawValue()
  this.service.postUser(this.formData).subscribe(res=>{
console.log(res);
this.myForm.reset();
let ref=document.getElementById('cancel')
ref?.click();
this.getUser();
  })
  
}
  
deleteUser(user: any){
  this.service.deleteUser(user).subscribe(()=>{
    this.getUser();
  })
}
editUser(user:any){
 this.userModelobj.id = user.id;
  this.myForm.controls['id'].setValue(user.id),
  this.myForm.controls['userId'].setValue(user.userId),
  this.myForm.controls['title'].setValue(user.title),
  this.myForm.controls['body'].setValue(user.body)
}
updateUser(){
 this.userModelobj.id = this.myForm.value.id;
 this.userModelobj.body = this.myForm.value.body;
 this.userModelobj.title = this.myForm.value.title;
 this.userModelobj.userId = this.myForm.value.userId;
  this.service.updateUser(this.userModelobj, this.userModelobj.id).subscribe((res)=>{
    console.log(res);
  }) 
}
}
