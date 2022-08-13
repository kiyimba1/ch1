import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:
    // })
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  @ViewChild('f') signupForm: NgForm;

  // onSubmit(form: NgForm) {
  //   console.log(form);
    
  // }

  onSubmit() {
    this.user.username = this.signupForm.value.userData.username;
    this.user.username = this.signupForm.value.userData.username;
    this.user.username = this.signupForm.value.userData.username;
    this.user.username = this.signupForm.value.userData.username;
  }
}
