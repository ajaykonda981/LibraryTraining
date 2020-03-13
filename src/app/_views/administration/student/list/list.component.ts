import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { StudentService } from 'src/app/_services/student.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'departmentName','gender','dob','actions'];
  dataSource: any;
  tableSource:any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor(
    public studentService: StudentService
  ) { }

  ngOnInit() {
    this.fetchResults();
  }

  fetchResults() {
    this.studentService.search().subscribe(a=>{
      this.tableSource=a;
      this.dataSource=new MatTableDataSource(this.tableSource);
      this.dataSource.paginator = this.paginator;
    })
  }

  delete(id:number) {
   console.log('deleted')
  }

  

}
