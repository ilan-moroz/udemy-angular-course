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
  isLoading = false;
  error: string = null;

  constructor(private auth: AuthService) {}

  onSwitch() {
    this.isLogin = !this.isLogin;
  }

  onSub(form: NgForm) {
    if (form.invalid) return;
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    if (!this.isLogin) {
      this.auth.signUp(email, password).subscribe({
        next: (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        error: (err) => {
          console.error(err);
          switch (err.error.error.message) {
            case 'EMAIL_EXISTS':
              this.error = 'This email already exists';
          }
          this.isLoading = false;
        },
      });
    }
  }
}
