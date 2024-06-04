import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  router = new Router();
  onLogOut = () => {
    if (confirm('Are you sure want to log out ?')) {
      localStorage.removeItem('token');
      this.router.navigate(['']);
    }
  };
}
