import { Injectable } from '@angular/core';
import { Emplooyee } from '../model/emplooyee';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly root='http://localhost:8000/employee/';

  public dataList:Emplooyee[];

  public formData:Emplooyee;
  constructor(public http:HttpClient) { }

  public postRequest(infoData){
    return this.http.post('http://localhost:8000/post-req/',infoData)
  }
  
  public getRequest():Observable<Emplooyee[]>{
    return this.http.get<Emplooyee[]>(this.root)
  }

  public putRequest(infoData:Emplooyee){
    return this.http.put(this.root+infoData.pk,infoData)
  }

  public deleteRequest(infoData:Emplooyee){
    return this.http.delete(this.root+infoData.pk)
  }

}
