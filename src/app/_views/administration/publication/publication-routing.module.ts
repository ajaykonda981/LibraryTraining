import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicationListComponent } from './list/list.component';
import { PublicationPopupComponent } from './popup/popup.component';


const routes: Routes = [
  {
    path: '',
    component: PublicationListComponent
  },
  {
    path: 'create',
    component: PublicationPopupComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicationRoutingModule { }
