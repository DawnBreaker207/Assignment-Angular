import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  URL: string = 'http://localhost:3000';
  Sign_UP = (data: User) => {
    return this.http.post(this.URL + '/register', data);
  };
  Sign_In = (data: User) => {
    return this.http.post(this.URL + '/login', data);
  };
  Check_User_Valid = (): boolean => {
    let check = false;
    const token: string = localStorage.getItem('token') as string;
    try {
      const decoded: any = jwtDecode(token);
      if (decoded.exp > Date.now() / 1000 && decoded.sub == 1) check = true;
    } catch (error) {
      console.log(error);
    }
    return check;
  };
}
