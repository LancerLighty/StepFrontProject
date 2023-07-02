import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentSnapshot} from '@angular/fire/compat/firestore'
import firebase from "firebase/compat/app";
import 'firebase/firestore'; // Import the Firestore module
import { User } from '../user.model';
import "firebase/firestore";
import { from, switchMap } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fs:AngularFirestore, private router:Router) { }
  db:any = firebase.firestore()
  getAllUsers(){
    let arr = this.db.collection("users")
    return from(arr.get())
  }
  addUser(user:User){
    user = Object.assign({}, user)
    user.email += "@gmail.com"
    // const userObject = user['toObject']()
    user.id = this.fs.createId();
    return this.fs.collection('/users').add(user), this.router.navigate(['/signup/succesfull']);;
  }
  isLoggedIn(){
    let endTime = localStorage.getItem("qlogin") || "";
    if(endTime == ""){
      return false;
    }
    let endTimenumb = JSON.parse(endTime).expirationTime as number
      // Check if the timer has ended
    const Time = new Date().getTime()
    if (endTimenumb < Time) {
      localStorage.removeItem("qlogin");
      return false
    } else {
      return true
    }
  }
  addToLocalStorageWithTimer(id:any): void {
    const expirationMs = 10080 * 60000; // Convert expiration time to milliseconds
    const expirationTime = new Date().getTime() + expirationMs; // Calculate the expiration time
  
    const item = {
      value: "qloggedIn",
      id: id, 
      expirationTime: expirationTime
    };
  
    localStorage.setItem("qlogin", JSON.stringify(item));
  
    setTimeout(() => {
      localStorage.removeItem("qlogin");
    }, expirationMs);
    this.router.navigate([`/quizzes`]);
  }
}
