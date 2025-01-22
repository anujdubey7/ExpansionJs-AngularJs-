import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


// {} [] * 
@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  formData: FormGroup;
  constructor(private fb: FormBuilder){
    	this.formData = this.fb.group({
        firstName:[null, [Validators.required, Validators.minLength(4)]],
        lastName: [null, Validators.required],
        phoneNo: [null, Validators.maxLength(10)],
        email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]], //this is email pattern  - 
        // "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
        college: [null],
        address: this.fb.group({
          city: [null],
          state : [null, Validators.required]
      }),
        skills: this.fb.array([])
  })

  
}
get skills(): FormArray {
  return this.formData.get('skills') as FormArray;
}

addSkill(){
  this.skills.push(this.fb.control(null, Validators.required));
}

removeSkill(index: number){
  this.skills.removeAt(index);
}

formValue: any;
onSubmit() {
  if (this.formData.valid) {
    
    // const userInfo = {
    //   fName: this.formData.value.firstName,
    //   lName: this.formData.value.lastName
    // }
    alert('Form submitted successfully!');
    this.formValue = this.formData.value;
   // localStorage.setItem('userInfo', JSON.stringify(userInfo))
    
  } else {
    alert('Form is invalid!');
    
  }
}

}
