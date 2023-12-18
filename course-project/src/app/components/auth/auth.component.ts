import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLogin = true;

  constructor(private auth: AuthService) {}

  onSwitch() {
    this.isLogin = !this.isLogin;
  }

  onSub(form: NgForm) {
    if (form.invalid) return;
    const email = form.value.email;
    const password = form.value.password;
    if (!this.isLogin)
      this.auth.signUp(email, password).subscribe({
        next: (resData) => console.log(resData),
        error: (err) => console.error(err),
      });
    form.reset();
  }
}
