import { Component } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private AuthenticationService: AuthenticationService) {}

  authenticationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(5)]),
  });

  users: User = {} as User;
  router = new Router();
  onSubmit = () => {
    this.AuthenticationService.Sign_UP(
      this.authenticationForm.value as User
    ).subscribe((data) => {
      this.router.navigate(['signin'])
    });
  };
}
