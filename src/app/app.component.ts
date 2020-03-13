import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LibraryTraining';
 
   constructor(
     public route:Router
   ){

   }
  navigateToPage(page?: any) {
    if (page === 'Department') {
      this.route.navigate(['/admin/department'])
    }
    else if(page === 'Publication') {
      this.route.navigate(['admin/publication'])
    }
    else if(page === 'Book') {
      this.route.navigate(['admin/book'])
    }
    else if (page === 'Student') {
      this.route.navigate(['admin/student'])
    }
  }
}
