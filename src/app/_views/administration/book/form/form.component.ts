import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Book } from 'src/app/_models/Book';
import { DepartmentService } from 'src/app/_services/department.service';
import { PublicationService } from 'src/app/_services/publication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/_services/book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class BookFormComponent implements OnInit {
  public form: FormGroup;
  data;
  public department;
  public publication;
  public ID;
  public DeptName;
  public PubName;
  public Title = "Add Book";
  public btnText = "Save";
  constructor(
    public fb: FormBuilder,
    public deptService: DepartmentService,
    public pubService:  PublicationService,
    public bookService: BookService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.activatedRoute.params.subscribe(_params=>{
     
      this.ID=_params.id
     
    })

   }

  ngOnInit() {
    this.Title = "ADD Book"
    this.btnText = "Save"
    this.buildBookForm();
    this.getDropdowns();
    if (this.ID !== undefined) {
      this.Title = "Update Book"
      this.btnText = "Update"
      this.getBookDetailsByID();
    }

  }

  buildBookForm(book:Book = new Book()) {
    console.log('department id',book.departmentId)
    this.form = this.fb.group({
      id: [book.id||''],
      name: [book.name||''],
      detail: [book.detail||''],
      author: [book.author||''],
      publicationId: [book.publicationId||''],
      publicationName: [book.publicationName||''],
      departmentId: [book.departmentId||''],
      departmentName: [book.departmentName||''],
      price: [book.price||''],
      quantity: [book.quantity||''],
    })
  }


  getDropdowns(){
    this.deptService.getAll().subscribe(a=>{
      this.department=a
    })
    this.pubService.getAll().subscribe(a=>{
      this.publication=a
    })
  }

  save(btnText: string) {
    this.form.markAllAsTouched()
    if (this.form.valid) {
      this.deptService.getByid(this.form.value.departmentId).subscribe(deptName => {
        this.DeptName = deptName;
        this.form.value.departmentName = this.DeptName.name

        //publication service
        this.pubService.getByid(this.form.value.publicationId).subscribe(pubName => {
          this.PubName = pubName;
          this.form.value.publicationName = this.PubName.name

          //Save Functionlaity
          if (btnText == "Save") {
            console.log('in save')
            this.bookService.post(this.form.value).subscribe(_res => {
              this.router.navigate(['../'], { relativeTo: this.activatedRoute })
              console.log('_res', _res)
            })
          }
          else {
            console.log('in update')
            this.bookService.update(this.form.value).subscribe(_res => {
              console.log('_res', _res)
              this.router.navigate(['../../'], { relativeTo: this.activatedRoute })
            })
          }
        })
      })
    }
  }

  getBookDetailsByID() {
    this.bookService.getByid(this.ID).subscribe(_res=>{
      this.buildBookForm(_res)
    })
  }

 
}
