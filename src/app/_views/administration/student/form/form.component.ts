import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/Student';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from 'src/app/_services/department.service';
import { StudentService } from 'src/app/_services/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class StudentFormComponent implements OnInit {
  public form: FormGroup;
  public department;
  public btnText:string ="Save";
  public ID;
  public Title;
  //public inputReadonly:boolean = true;
  constructor(
    public fb: FormBuilder,
    public deptService: DepartmentService,
    public studentService: StudentService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) {

    this.activatedRoute.params.subscribe(_params=>{
     
      this.ID=_params.id
     
    })
   }

  ngOnInit() {
    
   
    this.getDropdowns();
    this.buildStudentForm()
    if (this.ID !== undefined) {
      this.Title = "Update"
      this.btnText = "Update"
      this.getBookDetailsByID();
    }
  }
  buildStudentForm(student:Student = new Student()) {
    
    this.form = this.fb.group({
    id : [student.id||'',[Validators.required]],
    name: [student.name||'',[Validators.required]],
    departmentId:[student.departmentId||'',[Validators.required]],
    departmentName:[student.departmentName||'',[Validators.required]],
    gender:[student.gender||'M',[Validators.required]],
    dob:[ {value:student.dob||'',disabled:true},[Validators.required]],
    mobile:[ student.mobile||'',[Validators.required]],
    address:[student.address||'',[Validators.required]],
    city:[student.city||'',[Validators.required]],
    pincode:[student.pincode||'',[Validators.required]],
    email:[student.email||'',
    [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    });
    //this.disableControls();
  }

  getDropdowns(){
    this.deptService.getAll().subscribe(a=>{
      this.department=a
    })
  }

  save(btnText: string) {
    this.form.markAllAsTouched()
    console.log('btnText',btnText)
    if (this.form.valid) {
      this.deptService.getByid(this.form.value.departmentId).subscribe(_res=>{
        this.form.value.departmentName= _res.name
        if(btnText === 'Save') {
          this.studentService.post(this.form.value).subscribe(_Postres=>{
            this.router.navigate(['../'], { relativeTo: this.activatedRoute })
                   console.log('_res',_Postres)
          },error=>{
            console.log('error is',error)
          })
        }
        else {
          this.studentService.update(this.form.value).subscribe(_Postres => {
            this.router.navigate(['../../'], { relativeTo: this.activatedRoute })
            console.log('_res', _Postres)
          }, error => {
            console.log('error is', error)
          })
        }
      })
    }
  }

  getBookDetailsByID() {
    this.studentService.getByid(this.ID).subscribe(_res=>{
      _res.dob= new Date(_res.dob)
      this.buildStudentForm(_res)
    })
  }

  disableControls() {
    this.form.get('dob').disable();
  }
}
