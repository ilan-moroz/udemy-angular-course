import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse, AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  isLogin = true;
  isLoading = false;
  error: string = null;

  constructor(private auth: AuthService, private router: Router) {}

  onSwitch() {
    this.isLogin = !this.isLogin;
  }

  onSub(form: NgForm) {
    if (form.invalid) return;
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    let authObs: Observable<AuthResponse>;

    if (!this.isLogin) {
      authObs = this.auth.signUp(email, password);
    } else {
      authObs = this.auth.login(email, password);
    }

    authObs.subscribe({
      next: (resData) => {
        console.log(resData);
        this.isLoading = false;
      },
      error: (errMsg) => {
        console.error(errMsg);
        this.error = errMsg;
        this.isLoading = false;
      },
      complete: () => this.router.navigate(['/recipes']),
    });
  }
}
