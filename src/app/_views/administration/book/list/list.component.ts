import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { BookService } from 'src/app/_services/book.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class BookListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','publicationName','departmentName','actions'];
  dataSource: any;
  tableSource:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  data;
  btnText:string = "Save";
  public form: FormGroup
  constructor(
    public bookService: BookService,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildFilter();
    this.fetchResults();
  }
  

  fetchResults(criteria:HttpParams = new HttpParams()) {
    this.bookService.search(criteria).subscribe(a=>{
      this.tableSource=a;
      this.dataSource=new MatTableDataSource(this.tableSource);
      this.dataSource.paginator = this.paginator;
    })
  }

  delete(id: number) {
    this.bookService.delete(id).subscribe(a => {
      this.fetchResults()
    }, error => {
      console.log('error.status',error.status)
    });
  }

  buildFilter() {
    this.form = this.fb.group({
      publicationName:[''],
      departmentName:['']
    })
  }

  filter() {
    console.log('this.form.value is', this.form.value)
    console.log('this.form',this.form)
    let httpParams = new HttpParams();
    if(this.form.value.publicationName != "" && this.form.value.publicationName!= null  ){
    httpParams = httpParams.set('publicationName', this.form.value.publicationName);
    }
    if(this.form.value.departmentName!= "" && this.form.value.departmentName!= null ){
    httpParams = httpParams.set('departmentName', this.form.value.departmentName);
    }
  
    this.fetchResults(httpParams)
     console.log('http params are',httpParams)
  }
  
  reset() {
    this.form.reset();
    
  }
}
