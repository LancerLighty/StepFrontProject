import { Injectable } from '@angular/core';
// import {AngularFirestore} from '@angular/fire/compat/firestore';
import { AngularFirestore, DocumentSnapshot, DocumentData } from '@angular/fire/compat/firestore';
// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { from, switchMap } from 'rxjs';
import { Questions } from '../questions.model';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private fs:AngularFirestore) { }
  db:any = firebase.firestore()
  studArr:any[] = []
  getQuiz(){
    let arr = this.db.collection("quizzes")
    return from(arr.get())
  }

  addQuiz(std:any){
   return this.db.collection("quizzes").add(std)
  }
  deleteQuiz(id:any){
    return from(this.db.collection("quizzes").doc(id).delete())
  }
  updateQuiz(id:any,newQuizz:any){
     return this.db.collection("quizzes").doc(id).update(newQuizz)
  }
  deleteQuestion(id:any, newArr:any) {
    this.deleteQuiz(id)
    this.addQuiz(newArr)
  }
}
