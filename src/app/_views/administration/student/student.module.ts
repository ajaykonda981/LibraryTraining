import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './list/list.component';
import { StudentFormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule} from '@angular/material';
import { MaterialModule } from 'src/app/_shared/material.module';
import { StudentService } from 'src/app/_services/student.service';
import { GenderPipe } from 'src/app/_pipes/GenderPipe';
import { DepartmentService } from 'src/app/_services/department.service';
//import { MatMomentDateModule } from "@angular/material-moment-adapter";

@NgModule({
  declarations: [
    StudentListComponent,
     StudentFormComponent,
     GenderPipe
    ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers:[
    MatDatepickerModule,
    DatePipe,
    StudentService,
    DepartmentService
  ]
})
export class StudentModule { }
