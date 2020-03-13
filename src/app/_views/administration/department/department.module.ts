import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';

//components
import { DepartmentListComponent } from './list/list.component';
import { DepartmentPopupComponent } from './popup/popup.component';

//Material
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatDialogModule, MatCardModule, MatFormFieldModule, MatInputModule, MatPaginatorModule} from '@angular/material';

//Services
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from 'src/app/_services/department.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentPopupComponent,

  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
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
  //  MatLabelModule
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFireDatabaseModule,
  ],
  providers:[
    DepartmentService,
    AngularFirestore
  ],
  entryComponents:[
    DepartmentPopupComponent
  ]
})
export class DepartmentModule { }
