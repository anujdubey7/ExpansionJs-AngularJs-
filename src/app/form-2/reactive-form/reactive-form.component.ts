import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      fName: [null, Validators.required],
      lName: [null, Validators.required],
      phoneNo: [
        null,
        [Validators.required]
      ],
      college: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.studentForm.valid) {
      console.log('Form Submitted:', this.studentForm.value);
    } 
    else {
      console.error('Form is invalid');
      this.studentForm.markAllAsTouched(); }
  }
}
