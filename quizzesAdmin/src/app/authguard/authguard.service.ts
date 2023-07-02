import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../adminlogin/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/']); // Redirect to the login page or any other page
      return false; // Block access to the route
    }
  }
}
