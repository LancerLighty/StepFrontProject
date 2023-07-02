import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser:User = new User()
  constructor(private auth:AuthService, private router:Router) { }
  repeatPass:string = ""
  usersarr:any[] = []
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
  signUp(){
    if (this.newUser.password != this.repeatPass){
      this.error = "Passwords aren't the same."
    }else if(this.newUser.username.indexOf('@') != -1){
      this.error = "Username can't have @ this simbol"
    }else if(this.newUser.email != "" && this.newUser.username != "" && this.newUser.password){
      this.error =""
        let boolean:boolean = true
        for(let i of this.usersarr){
          if(i.username == this.newUser.username){
            this.error="User with this Username already exists"
            boolean = false
            break;
          } else if ((i.email) == this.newUser.email + "@gmail.com"){
            this.error="User with this Email already exists"
            boolean = false
            break;
          }
        }
        if(boolean){
          this.auth.addUser(this.newUser)
          alert("registered succesfully")
        }
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
