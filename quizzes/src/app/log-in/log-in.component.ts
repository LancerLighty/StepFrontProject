import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userinfo = {
    usernEmail:"",
    password: ""
  }
  constructor(private auth:AuthService, private router:Router) { }
  usersarr:any[] = []
  userfire = {
    id: ""
  }
  ngOnInit(): void {
    this.auth.getAllUsers().subscribe((data:any) => {
      
      this.usersarr = data.docs.map((x: any) => {
        const dt = x.data();
        dt.id = x.id;
        return dt;
      });
    })
  }
  error:string = ""
  LogIn(){
    if(this.userinfo.usernEmail == "" || this.userinfo.password == ""){
      this.error = "Fill all inputs."
    } else {
      let check = false;
      for (let i of this.usersarr) {
        if ((this.checkEmail() && i.email == this.userinfo.usernEmail) ||
            (!this.checkEmail() && i.username == this.userinfo.usernEmail)) {
          this.userfire = i;
          check = true;
          break;
        }
      }
      if (check) {
        this.auth.addToLocalStorageWithTimer(this.userfire.id);
      }
    }
  }
  checkEmail(){
    if(this.userinfo.usernEmail.indexOf('@') == -1){
      return false
    } else {
      return true
    }
  }
  type:string = "password"
  togglePasswordVisibility(){
    if(this.type == "password"){
      this.type = "text"
    } else {
      this.type = "password"
    }
  }
}


