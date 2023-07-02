import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from } from 'rxjs';
import firebase from "firebase/compat/app";
import "firebase/firestore";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fs:AngularFirestore) { }
  db:any = firebase.firestore()
  getAuth(){
    let arr = this.db.collection("admin")
    return from(arr.get())
  }
  isLoggedIn(){
    let endTime = localStorage.getItem("login") || "";
    if(endTime == ""){
      return false;
    }
    let endTimenumb = JSON.parse(endTime).expirationTime as number
    console.log(endTimenumb, " ", Date.now())
      // Check if the timer has ended
    const Time = new Date().getTime()
    console.log(endTimenumb > Time)
    if (endTimenumb < Time) {
      localStorage.removeItem("login");
      localStorage.removeItem("token");
      return false
    } else {
      return true
    }
    return true
  }
  addToLocalStorageWithTimer(): void {
    const expirationMs = 10 * 60000; // Convert expiration time to milliseconds
    const expirationTime = new Date().getTime() + expirationMs; // Calculate the expiration time
  
    const item = {
      value: "loggedIn",
      expirationTime: expirationTime
    };
  
    localStorage.setItem("login", JSON.stringify(item));
  
    setTimeout(() => {
      localStorage.removeItem("login");
    }, expirationMs);
  }

}
