import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookListComponent } from './list/list.component';
import { BookFormComponent } from './form/form.component';
import { MatTableModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatCardModule, MatInputModule, MatPaginatorModule, MatSnackBarModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PublicationService } from 'src/app/_services/publication.service';
import { BookService } from 'src/app/_services/book.service';
import { DepartmentService } from 'src/app/_services/department.service';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [BookListComponent, BookFormComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
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
    MatSnackBarModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers:[
    PublicationService,
    BookService,
    DepartmentService
  ]
})
export class BookModule { }
