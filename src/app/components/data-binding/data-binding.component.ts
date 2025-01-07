import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string = "Angular"; 
  stateName: string = "Select";
  inputType = "radio"; 
  myClassName: string = "bg-primary"; 
  rollNo: number  = 123; 
  isIndian: boolean = true; 
  
  constructor() {
     
  }

  changeCourseName() {
    this.courseName = "React Js";
  }
  showAlert(message: string) {
      alert(message)
  }



}
