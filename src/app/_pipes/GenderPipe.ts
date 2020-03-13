import {Pipe, PipeTransform} from '@angular/core';
@Pipe ({
   name : 'gender'
})
export class GenderPipe implements PipeTransform {
   transform(val : string) : string {
       if(val == "M") { return "Male" }
       else { return "Female"}
   }
}