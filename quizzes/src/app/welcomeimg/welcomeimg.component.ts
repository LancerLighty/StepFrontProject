import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-welcomeimg',
  templateUrl: './welcomeimg.component.html',
  styleUrls: ['./welcomeimg.component.css']
})
export class WelcomeimgComponent implements OnInit { 
  showButtons:boolean = true
  constructor( private auth:AuthService) { }

  ngOnInit(): void {
    if(this.auth.isLoggedIn()){
      this.showButtons = false
    } else {
      this.showButtons = true
    }
  }

}
