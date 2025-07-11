import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {

  const accountservice = inject(AccountService);
  const toastr = inject(ToastrService);
 
  if(accountservice.currentUser())
  {
    return true;
  }
  else
  {
    toastr.error("Login/Regiter first to access this page.")
    return false;
  }

};
