import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentService } from 'src/app/_services/department.service';
import { MatDialog, MatPaginator } from '@angular/material';
import { DepartmentPopupComponent } from '../popup/popup.component';
import { analytics } from 'firebase';
import { Title } from '@angular/platform-browser';
import { stringify } from 'querystring';
import { CommonListHelper } from 'src/app/_shared/CommonListhelper';
import {MatTableDataSource} from '@angular/material/table';
import { Department } from 'src/app/_models/Department';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class DepartmentListComponent  implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'code','actions'];
  dataSource: any;
  tableSource:any;
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  data;
  btnText:string = "Save";
  errorMessage:string = "empty";
  constructor(
    public deptService: DepartmentService,
    public dialog: MatDialog
  ) {
    
   }

  ngOnInit() {
    this.fetchResults();
  }

  fetchResults() {
    this.deptService.search().subscribe(a=>{
      this.tableSource=a;
      this.dataSource=new MatTableDataSource(this.tableSource);
      this.dataSource.paginator = this.paginator;
    })
  }

  openDialog(title: string, rowData?: any) {
    (title == "New") ? this.btnText = "Save" : this.btnText = "Update";
    (title === "New") ? title = "Create Department" : title = "Update Department";
    const data = { title: title, btnText: this.btnText, payload: {} }
    if (rowData.id && rowData.id > 0) {
      this.deptService.getByid(rowData.id).subscribe(result => {
        const data = { title: title, btnText: this.btnText, payload: result }
        this.callDialog(data)
      });
    }
    else {
      this.callDialog(data)
    }
  }

  callDialog(data){
    const dialogRef = this.dialog.open(DepartmentPopupComponent, {
      width: '600px',
      height:'350px',
      data: data   //
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fetchResults()
    });
  }

  delete(id: number) {
    this.deptService.delete(id).subscribe(a => {
      this.fetchResults()
    }, error => {
      this.errorMessage = error.status
    });
  }

  

}
