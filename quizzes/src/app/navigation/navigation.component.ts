import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { InfoService } from '../info/info.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  local:boolean = true
  constructor(private auth:AuthService, private router:Router) { }
  username:string = ""
  locals:any = localStorage.getItem("qlogin") || ""
  ngOnInit(): void {
    if(!this.auth.isLoggedIn()){
      this.local = false
    } else {    
      this.locals = localStorage.getItem("qlogin") || ""
      let localj = JSON.parse(this.locals) || {id: ""}
      this.auth.getAllUsers().subscribe((data:any) => { 
        let usersarr = data.docs.map((x: any) => {
          const dt = x.data();
          dt.id = x.id;
          return dt;
        });
        let filteredUsers = usersarr.filter((user: any) => user.id == localj.id);
        this.username = filteredUsers[0].username
      })
    }
  }
  LogOut(){
    localStorage.removeItem("qlogin")
    this.router.navigate(['/login'])
  }

}
