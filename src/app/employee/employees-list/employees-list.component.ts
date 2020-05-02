import { Component, OnInit,Input } from '@angular/core';
import { Emplooyee } from 'src/app/model/emplooyee';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  constructor(public service:EmployeeService,private toastr: ToastrService) { }

  public dataList:Emplooyee[];

  ngOnInit() {
      this.service.getRequest().subscribe(res=>{

        this.service.dataList = res;
        
      })
  }

    public fun(){
      this.service.getRequest().subscribe(res=>{
        this.dataList=res;
      })
    }



  public populateData(item){
    this.service.formData=item;
  }

  public removeData(item){
    if(confirm("Are You Sour to Delete This Record")){
    this.service.deleteRequest(item).subscribe(res=>{
      this.service.getRequest().subscribe(res=>{
        this.service.dataList = res
      })
      this.toastr.warning('Data have removed Sucessfully', 'Deleted Daata ');
      this.fun();
    })
  }}

}
