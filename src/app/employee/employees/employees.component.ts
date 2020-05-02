import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(public service:EmployeeService,private toastr: ToastrService ,
    private route:Router,
   public http:HttpClient) { }

  ngOnInit() {
    this.reSet();
  }
  public reSet(from?:NgForm){
      this.service.formData={
        pk:null,
        empName:'',
        empMobile:'',
        empEmail:'',
        postion:'',
        empCode:''
      }
   }


   public submitAction(form:NgForm){
      console.log(form.value)
      if(form.value.pk==null){
        let cust={
          empName:form.value.empName,
          empMobile:form.value.empMobile,
          empEmail:form.value.empEmail,
          postion:form.value.postion,
          empCode:form.value.empCode
        }
        this.service.postRequest(cust).subscribe(res=>{
          this.service.getRequest().subscribe(
            res=>{
              this.service.dataList = res
            }
          )
          this.toastr.success('New Registration have Done Sucessfully', 'Registration Update ');
          console.log("Sucess fully")
          
      })
    }
    else{
      this.service.putRequest(form.value).subscribe(res=>{
        this.toastr.info('Updation have Done Sucessfully', 'Registration Update ');
      // this.conp.ngOnInit()
      this.reSet()
      })
    }
   }
}
