import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structure-directives',
  imports: [FormsModule, CommonModule],
  templateUrl: './structure-directives.component.html',
  styleUrl: './structure-directives.component.css'
})
export class StructureDirectivesComponent {
  cityArray: string [] = ['Pune','Mumbai','Nagpur','Thane'];
  studentList: any[] = [
    {studId:12, name:'AAA', city: 'Pune',   isActive:  false},
    {studId:22, name:'BBB', city: 'Mumbai', isActive:  false},
    {studId:32, name:'CC', city: 'Jalgao', isActive:  true},
    {studId:56, name:'DD', city: 'Mumbai', isActive:  false},
    {studId:34, name:'EE', city: 'Nagpur', isActive:  false},
    {studId:76, name:'FFF', city: 'Thane', isActive:  true},
  ]
}
