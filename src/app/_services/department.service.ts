import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../_models/Student';
import { Department } from '../_models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    public http: HttpClient
  ) { }

  search() {
    return this.http.get('http://localhost:3000/department');
  }

  post(data: any) {
    return this.http.post('http://localhost:3000/department',data)
  }

  delete(id:number) {
    return this.http.delete('http://localhost:3000/department/'+id)
  }

  getByid(id:number) :Observable<Department>{
    return this.http.get<Department>('http://localhost:3000/department/'+id)
  }

  update(data) {
    return this.http.put('http://localhost:3000/department/'+data.id,data)
  }
  getAll(){
    return this.http.get('http://localhost:3000/department')
  }
}
