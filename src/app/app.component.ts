import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from './service.service';
import { userDataModel } from './app.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curd';
  displayedColumns: string[] = ['Id', 'userId', 'Title', 'Msg' ,'action'];
  dataSource: any;
  myForm:FormGroup;
  userDataModelobj:userDataModel= new userDataModel();
  formData: any;
  
  constructor( private service: ServiceService, private fb :FormBuilder) {
    this.myForm= this.fb.group({
      id:["",],
      title:[""],
      msg:[""],
      userid:[""]
    })
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getData().subscribe(res=>{
      console.log(res);
      this.dataSource=res;
    })
  }
  postData(){
    this.formData= this.myForm.getRawValue()
    this.service.postData(this.formData).subscribe(res=>{
      console.log(res);
    })
  }
  edit(dataSource:any){
    let ref= document.getElementById('modal')
    ref?.click();
    this.userDataModelobj.id = dataSource.id
    this.myForm.controls['id'].setValue(dataSource.id),
    this.myForm.controls['userid'].setValue(dataSource.userid),
    this.myForm.controls['msg'].setValue(dataSource.msg),
    this.myForm.controls['title'].setValue(dataSource.title)
  }
 updateData(){
    this.userDataModelobj.id = this.myForm.value.id;
    this.userDataModelobj.userid = this.myForm.value.userid; 
    this.userDataModelobj.msg = this.myForm.value.msg;
    this.userDataModelobj.title = this.myForm.value.title;
  
 
    this.service.updateData(this.userDataModelobj,this.userDataModelobj.id).subscribe(res=>{
      console.log(res);
    })
  }
  delete(user:any){
    this.service.deleteData(user).subscribe(()=>{
      this.getData();
    })
      

  }
}
