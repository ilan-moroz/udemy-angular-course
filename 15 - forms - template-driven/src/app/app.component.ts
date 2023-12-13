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
    console.log(this.signForm.value);
  }
}
