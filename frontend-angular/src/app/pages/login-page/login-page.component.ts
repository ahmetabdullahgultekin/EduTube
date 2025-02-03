import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {NgIf, NgStyle} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule,
    NgStyle
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  providers: [
    AuthService
  ]
})
export class LoginPageComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    this.errorMessage = '';
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe({
          next: (response) => {
            localStorage.setItem('token', response.token);
            this.router.navigate(['/dashboard']).then(r => {
                console.log('Navigated to dashboard');
                this.errorMessage = 'Login successful!';
              }
            );
          },
          error: (error) => {
            this.errorMessage = error.error.message || 'Login failed!';
          },
          complete: () => {
            this.errorMessage = 'Login failed!';
          }
        });
    } else {
      this.errorMessage = 'Invalid form data';
    }
  }
}

