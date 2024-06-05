import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication.service';
import { User } from '../../../interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  constructor(private AuthenticationService: AuthenticationService) {}

  authenticationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  users: User = {} as User;
  router = new Router();
  ngOnInit() {
    if (this.AuthenticationService.Check_User_Valid())
      this.router.navigate(['admin']);
  }

  onSubmit = () => {
    this.AuthenticationService.Sign_In(
      this.authenticationForm.value as User
    ).subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('token', data?.accessToken);

      this.router.navigate(['admin']);
    });
  };
}
