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
  title = 'curd';
  user: any;
  myForm : FormGroup;
  formData: any;
  data:any;
  EmployeeModelObj: EmpolyeeModel= new EmpolyeeModel();
  constructor(private service:ServiceService, private fb: FormBuilder) {
      this.myForm= this.fb.group({
        id:['',[ Validators.required]],
        name: ['',[ Validators.required]],
        comment: ['',[ Validators.required]],
        salary: ['',[ Validators.required]],
       })
  }

  ngOnInit(): void {
    this.getEmployee()
    
  }
  getEmployee(){
    this.service.getEmployee().subscribe(res=>{
      console.log(res);
      this.user=res;
    })
  }
  postEmployee(){
    this.formData= this.myForm.getRawValue()
    this.service.postEmployee(this.formData).subscribe(res=>{
      console.log(res);
    })
  }
  editData(user:any){
    this.EmployeeModelObj.id = user.id
    this.myForm.controls['id'].setValue(user.id),
    this.myForm.controls['name'].setValue(user.name),
    this.myForm.controls['comment'].setValue(user.comment),
    this.myForm.controls['salary'].setValue(user.salary)
  }
  updatemployee(){
    this.EmployeeModelObj.id = this.myForm.value.id;
    this.EmployeeModelObj.name = this.myForm.value.name;
    this.EmployeeModelObj.salary = this.myForm.value.salary;
    this.EmployeeModelObj.comment = this.myForm.value.comment;
     this.service.updatemployee(this.EmployeeModelObj, this.EmployeeModelObj.id).subscribe((res)=>{
       console.log(res);
  })
}
  deleteEmployee(user:any){
this.service.deleteEmployee(user).subscribe(()=>{
   this.getEmployee(); 
  })
  }

}
