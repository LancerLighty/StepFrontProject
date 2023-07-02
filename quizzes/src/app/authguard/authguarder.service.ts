import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguarderService implements CanActivate{

  constructor(private auth:AuthService, private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean{
    if (!this.auth.isLoggedIn()) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/error']); // Redirect to login page or any other route
      return false; // Redirect to the login page or any other page
      // return false; // Block access to the route
    }
  }
}