import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './list/list.component';
import { DepartmentPopupComponent } from './popup/popup.component';


const routes: Routes = [
  {
    path: '',
    component: DepartmentListComponent
  },
  {
    path: 'create',
    component: DepartmentPopupComponent
  },
  {
    path: 'update/:id',
    component: DepartmentPopupComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
