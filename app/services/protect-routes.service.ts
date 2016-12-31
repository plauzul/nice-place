import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()

export class ProtectRoutesService implements CanActivate {

    constructor(private router: Router) {}

    canActivate() {
        if(!!sessionStorage.getItem("token")) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }
    }
  
}