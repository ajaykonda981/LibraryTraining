import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(

    public http: HttpClient
  ) { }

  search(criteria:HttpParams= new HttpParams()) {
    console.log('criteria is',criteria)
    return this.http.get('http://localhost:3000/book',{params:criteria})
  }

  post(data: any) {
    return this.http.post('http://localhost:3000/book',data)
  }

  delete(id:number) {
    return this.http.delete('http://localhost:3000/book/'+id)
  }

  getByid(id:number):Observable<any> {
    return this.http.get('http://localhost:3000/book/'+id)
  }

  update(data) {
    return this.http.put('http://localhost:3000/book/'+data.id,data)
  }
}
