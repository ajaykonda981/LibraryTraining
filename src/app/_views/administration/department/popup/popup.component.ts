import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/_services/department.service';
import { trigger } from '@angular/animations';
import { Department } from 'src/app/_models/Department';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class DepartmentPopupComponent implements OnInit {
   public form: FormGroup;
   popuTiltle:string;
   btnText:string;
   departmentData:any;
   public errorMessage:string = "empty";

  constructor(
    public dialogRef: MatDialogRef<DepartmentPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, 
    public fb: FormBuilder,
    public deptService: DepartmentService,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
    this.buildPopup(this.data.payload)
  }

  // save(btnText: string) {
  //   if (btnText == "Save") {
  //     this.deptService.post(this.form.value).subscribe(a => {
  //       this.close()
  //     }, error => {
  //       this.errorMessage = error.status;
  //     });
  //   }
  //   else {
  //     this.deptService.update(this.form.value).subscribe(a => {
  //       this.close();
  //     }, error => {
  //       this.errorMessage = error.status;
  //     });
  //   }
  // }

  
  close() {
     this.dialogRef.close()
  }

 buildPopup(department:Department) {
  this.form = this.fb.group({
    id: [department.id || 0],
    name: [department.name || "",[Validators.required]],
    code: [department.code || "",[Validators.required]]
  })
 }

 

 save(btnText: string) {
  let data = Object.assign({}, this.form.value);
  delete data.id;
  if (this.form.value.id == 0)
    this.firestore.collection('department').add(data);
  else
    //this.firestore.doc('department/' + this.form.value.id).update(data);
    console.log('data is created')
 // this.resetForm(form);
}

}
