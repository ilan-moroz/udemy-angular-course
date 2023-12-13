import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') signForm: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSub(form: NgForm) {
  //   console.log(form.value);
  // }

  onSub() {
    console.log(this.signForm);
  }
}
