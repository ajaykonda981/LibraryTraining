import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { PublicationService } from 'src/app/_services/publication.service';
import { Publication } from 'src/app/_models/Publication';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PublicationPopupComponent implements OnInit {
  public form: FormGroup;

  public errorMessage:string = "empty";
  constructor(
    public dialogRef: MatDialogRef<PublicationPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
    public pubService: PublicationService,
    public toastr: ToastrService ,
    public _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.buildPopup(this.data.payload)
  }

  buildPopup(publication:Publication) {
    this.form = this.fb.group({
      id: [publication.id||0],
      name: [publication.name||"",[Validators.required]]
    })
   }

  save(btnText: string) {
    if (this.form.valid) {

      if (btnText == "Save") {
        this.pubService.post(this.form.value).subscribe(a => {
          this.close()
        }, error => {
          this.errorMessage = error.status;
        });
      }
      else {
        this.pubService.update(this.form.value).subscribe(a => {
          this.close();
        }, error => {
          this.errorMessage = error.status;
        });
      }
    }
  }

  close() {
    this.dialogRef.close()
  }
  

}
