import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../../services/auth.service';
import {NgIf, NgStyle} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule,
    NgStyle
  ],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css',
  providers: [
    AuthService
  ]
})
export class RegisterPageComponent {
  registerForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(
        {
          name: this.registerForm.value.name,
          email: this.registerForm.value.email,
          password: this.registerForm.value.password
        }
      ).subscribe({
        next: (response) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']).then(r => {
              //this.errorMessage = 'Registration successful!';
              // Reload the page to update the navigation bar
              window.location.reload();
            }
          );
        },
        error: (error) => {
          this.errorMessage = error.error;
        },
        complete: () => {
          this.errorMessage = 'Registration completed!';
        }
      });
    } else {
      this.errorMessage = 'Invalid form data';
    }
  }
}
