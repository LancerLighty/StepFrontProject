import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../adminlogin/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logInInfo = {
    username: "",
    password: ""
  }
  arr:any = []
  adminInfo = {
    username: "",
    password: "",
    id: ""
  }
  error:string = ""
  constructor(private auth:AuthService, private router:Router) { }
  ngOnInit(): void {
    this.auth.getAuth().subscribe((data:any) => {
      this.arr = data.docs.map((x: any) => {
        const dt = x.data();
        dt.id = x.id;
        return dt;
      });
      this.adminInfo = this.arr[0]
    })
    if(this.auth.isLoggedIn()){
      this.router.navigate(['/quizzes']);
    }
  }
  logIn(){
    if(this.logInInfo.username == "" || this.logInInfo.password == ""){
      this.error = "make sure you filled all inputs."
    } else if(this.logInInfo.username == this.adminInfo.username && this.logInInfo.password == this.adminInfo.password){
      this.error = ""
      this.auth.addToLocalStorageWithTimer();
      this.router.navigate(['/quizzes']);
    } else {
      this.error = "password is Incorrect"
    }
  }

}
