import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { from, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdfavService {

  constructor(private fs:AngularFirestore) { }
  db:any = firebase.firestore()
  studArr:any[] = []
  getFav(){
    let arr = this.db.collection("favourites")
    return from(arr.get())
  }

  addFav(std:any){
   return this.db.collection("favourites").add(std)
  }
  deleteFav(id:any){
    return from(this.db.collection("favourites").doc(id).delete())
  }
}
