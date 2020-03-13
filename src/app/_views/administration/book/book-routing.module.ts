import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './list/list.component';
import { BookFormComponent } from './form/form.component';


const routes: Routes = [
 {
   path:'',
   component:BookListComponent
 },
 {
   path:'create',
   component:BookFormComponent
 },
 {
   path:'update/:id',
   component:BookFormComponent
 }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
