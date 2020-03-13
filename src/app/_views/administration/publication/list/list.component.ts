import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatDialog, MatTableDataSource } from '@angular/material';
import { DepartmentService } from 'src/app/_services/department.service';
import { PublicationService } from 'src/app/_services/publication.service';
import { PublicationPopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class PublicationListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name','actions'];
  dataSource: any;
  tableSource:any;
 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  data;
  btnText:string = "Save";
  errorMessage:string = "empty";
  constructor(
    public pubService: PublicationService,
    public dialog: MatDialog

  ) { }

  ngOnInit() {
    this.fetchResults();
  }

  fetchResults() {
    this.pubService.search().subscribe(a=>{
      this.tableSource=a;
      this.dataSource=new MatTableDataSource(this.tableSource);
      this.dataSource.paginator = this.paginator;
    })
  }


  openDialog(title: string, rowData?: any) {
    (title == "New") ? this.btnText = "Save" : this.btnText = "Update";
    (title === "New") ? title = "Create Publication" : title = "Update Publication";
    const data = { title: title, btnText: this.btnText, payload: {} }
    if (rowData.id && rowData.id > 0) {
      this.pubService.getByid(rowData.id).subscribe(result => {
        const data = { title: title, btnText: this.btnText, payload: result }
        this.callDialog(data)
      });
    }
    else {
      this.callDialog(data)
    }
  }

  callDialog(data){
    const dialogRef = this.dialog.open(PublicationPopupComponent, {
      width: '600px',
      height:'350px',
      data: data
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fetchResults()
    });
  }

  delete(id: number) {
    this.pubService.delete(id).subscribe(a => {
      this.fetchResults()
    }, error => {
      this.errorMessage = error.status
    });
  }

}
