import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Publication } from '../_models/Publication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(
    public http: HttpClient
  ) { }

  search(): Observable<Publication> {
    return this.http.get<Publication>('http://localhost:3000/publication')
  }

  post(data: any) {
    return this.http.post('http://localhost:3000/publication',data)
  }

  delete(id:number) {
    return this.http.delete('http://localhost:3000/publication/'+id)
  }

  getByid(id:number) {
    return this.http.get('http://localhost:3000/publication/'+id)
  }

  update(data) {
    return this.http.put('http://localhost:3000/publication/'+data.id,data)
  }

  getAll(){
    return this.http.get('http://localhost:3000/publication')
  }
}
