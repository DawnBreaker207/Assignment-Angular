import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const userServices = inject(AuthenticationService);
  const router = new Router();
  if (userServices.Check_User_Valid()) {
    return true;
  } else {
    router.navigate(['signin']);
    return false;
  }
};
