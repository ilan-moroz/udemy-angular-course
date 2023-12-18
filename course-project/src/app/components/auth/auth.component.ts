import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLogin = true;

  onSwitch() {
    this.isLogin = !this.isLogin;
  }

  onSub(form: NgForm) {}
}
