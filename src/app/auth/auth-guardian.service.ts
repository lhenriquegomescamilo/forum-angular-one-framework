import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { Observable } from 'rxjs/Rx';
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class AuthGuardianService implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) { }
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      if(this._authService.haveUserOnSession){
        return true;
      }
      this._router.navigate(["/login"]);
      return false;
  }
}
