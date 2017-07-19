import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'emp-root',
  templateUrl:'../employee/emp.html',
  styleUrls:['../employee/emp.comp.css'],
  encapsulation:ViewEncapsulation.Native
})
export class EmpComponent {
  title:'Employee Details';
}
