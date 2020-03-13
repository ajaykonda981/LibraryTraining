import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './list/list.component';
import { StudentFormComponent } from './form/form.component';


const routes: Routes = [
  {
    path:'',
    component:StudentListComponent
  },
  {
    path: 'create',
    component:StudentFormComponent
  },
  {
    path: 'update/:id',
    component: StudentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
