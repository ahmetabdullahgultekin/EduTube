import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {NgIf} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-register-page',
  imports: [
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    HttpClientModule
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
        this.registerForm.value.name,
        this.registerForm.value.email,
        this.registerForm.value.password
      ).subscribe({
        next: () => {
          this.router.navigate(['/login']).then(r => {
            console.log('Registration successful');
          });
        },
        error: (error) => {
          this.errorMessage = error.error.message;
        }
      });
    }
  }
}
