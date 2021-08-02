import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { EmpolyeeModel } from './app.model';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-weight', 'demo-symbol','action'];
  title = 'curd';
  dataSource: any;
 myForm:FormGroup;
  formData: any;
  EmpolyeeModelObj:EmpolyeeModel=new EmpolyeeModel();
  constructor(private service:ServiceService, private fb: FormBuilder) {
     this.myForm = this.fb.group({
       id:[""],
       name:[""],
       email:[""],
       salary:[""],
     }) 
  }

  ngOnInit(): void {
    this.getEmployee()
    
  }
  getEmployee(){
    this.service.getEmployee().subscribe((res=>{
     console.log(res); 
     this.dataSource=res;
    }))
    
  }
  postEmployee(){
    this.formData= this.myForm.getRawValue()
this.service.postEmployee(this.formData).subscribe(res=>{
  console.log(res);
})
    
  }
  editData(dataSource:any){
    let ref= document.getElementById('modal')
    ref?.click();
    this.EmpolyeeModelObj.id = dataSource.id
    this.myForm.controls['id'].setValue(dataSource.id),
    this.myForm.controls['name'].setValue(dataSource.name),
    this.myForm.controls['email'].setValue(dataSource.email),
    this.myForm.controls['salary'].setValue(dataSource.salary)
 
  }
  updateEmployee(){
 
    this.EmpolyeeModelObj.id = this.myForm.value.id;
    this.EmpolyeeModelObj.name= this.myForm.value.name; 
    this.EmpolyeeModelObj.email = this.myForm.value.email;
    this.EmpolyeeModelObj.salary = this.myForm.value.salary;
    this.service.updateEmpolyee(this.EmpolyeeModelObj, this.EmpolyeeModelObj.id).subscribe(res=>{
     console.log(res);
    })
}
  deleteEmployee(user:any){
 this.service.deleteEmployee(user).subscribe(()=>{
   this.getEmployee();
 })
  
  }

}
