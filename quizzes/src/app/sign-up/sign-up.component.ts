import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authentication/auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser:User = new User()
  constructor(private auth:AuthService) { }
  repeatPass:string = ""
  ngOnInit(): void {
  }
  error:string = ""
  signUp(){
    if (this.newUser.password != this.repeatPass){
      this.error = "Passwords aren't the same."
    }else if(this.newUser.email != "" && this.newUser.username != "" && this.newUser.password){
      this.error =""
      let usersarr = []
      this.auth.getAllUsers().subscribe((data:any) => {
        usersarr = data.docs.map((x: any) => {
          const dt = x.data();
          dt.id = x.id;
          return dt;
        });
        console.log(usersarr)
      })
    }
  }

}
