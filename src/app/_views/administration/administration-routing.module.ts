import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'department',
    loadChildren:'./department/department.module#DepartmentModule'
  },
  {
    path: 'publication',
    loadChildren: './publication/publication.module#PublicationModule'
  },
  {
    path:'book',
    loadChildren:'./book/book.module#BookModule'
  },
  {
    path: 'student',
    loadChildren: './student/student.module#StudentModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
