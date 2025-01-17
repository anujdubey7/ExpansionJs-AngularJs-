import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  standalone: false,
  
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})

// {} [] *

export class TemplateFormComponent {
  studentObj: studentObj = new studentObj();
  formValue: any;
  onSubmit(){
    this.formValue = this.studentObj;
    console.log(this.formValue)
  }
}

export class studentObj{
  fName: string;
  lName: string;
  phoneNo: string;
  college: string;
  
  constructor(
    fName: string = '',
    lName: string = '',
    phoneNo: string = '',
    college: string =''
    
  ){
    this.fName = fName;
    this.lName = lName;
    this.phoneNo = phoneNo;
    this.college = college;
  }
}
