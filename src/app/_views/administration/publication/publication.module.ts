import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicationRoutingModule } from './publication-routing.module';
import { PublicationListComponent } from './list/list.component';
import { PublicationPopupComponent } from './popup/popup.component';
import { MatPaginatorModule, MatTableModule, MatButtonModule, MatDialogModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicationService } from 'src/app/_services/publication.service';


@NgModule({
  declarations: [
    PublicationListComponent,
     PublicationPopupComponent
    ],
  imports: [
    CommonModule,
    PublicationRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatFormFieldModule ,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSnackBarModule
  ],
  providers:[
    PublicationService
  ],
  entryComponents:[
    PublicationPopupComponent
  ]
})
export class PublicationModule { }
