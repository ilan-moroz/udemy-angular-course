import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-assignmeent',
  templateUrl: './assignmeent.component.html',
  styleUrls: ['./assignmeent.component.css'],
})
export class AssignmeentComponent implements OnInit {
  @ViewChild('form') signForm: NgForm;

  defaultSub = 'advanced';

  subForm = {
    email: '',
    subscription: '',
    password: '',
  };
  sub = false;

  constructor() {}

  ngOnInit(): void {}

  onSub() {
    this.subForm.email = this.signForm.value.email;
    this.subForm.subscription = this.signForm.value.subscription;
    this.subForm.password = this.signForm.value.password;

    this.sub = true;

    this.signForm.reset();
  }
}
