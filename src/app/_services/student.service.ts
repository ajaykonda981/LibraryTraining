import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../_models/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    public http: HttpClient
  ) { }

  search() {
    return this.http.get('http://localhost:3000/student')
  }

  post(data: any) {
    return this.http.post('http://localhost:3000/student',data)
  }

  delete(id:number) {
    return this.http.delete('http://localhost:3000/student/'+id)
  }

  getByid(id:number):Observable<Student> {
    return this.http.get<Student>('http://localhost:3000/student/'+id)
  }

  update(data) {
    return this.http.put('http://localhost:3000/student/'+data.id,data)
  }

  getAll(){
    return this.http.get('http://localhost:3000/student')
  }
}
