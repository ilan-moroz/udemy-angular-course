import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') signForm: NgForm;
  defaultQ = 'pet';
  answer: string;
  genders = [
    'male',
    'female',
    'transStupid',
    'new thing that will be invented tomorrow',
  ];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  sub = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: 'asd',
    //   gender: 'new thing that will be invented tomorrow',
    // });
    this.signForm.form.patchValue({ userData: { username: suggestedName } });
  }

  // onSub(form: NgForm) {
  //   console.log(form.value);
  // }

  onSub() {
    this.user.username = this.signForm.value.userData.username;
    this.user.email = this.signForm.value.userData.email;
    this.user.secretQuestion = this.signForm.value.secret;
    this.user.answer = this.signForm.value.questionAnswer;
    this.user.gender = this.signForm.value.gender;

    this.sub = true;

    this.signForm.reset();
  }
}
