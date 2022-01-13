import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private user : UserService , private router : Router){
  
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(resolve => {
      this.user.getauth().onAuthStateChanged(user => {
        if (user) {this.router.navigate(['/home']);
      }
        resolve(!user ? true : false);
      });
    })
}
}
