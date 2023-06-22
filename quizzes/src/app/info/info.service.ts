import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { from, switchMap } from 'rxjs';
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
  ranQuestions(array:any){
    const selectedQuestions: string[] = [];
    while (selectedQuestions.length < 20) {
      const randomIndex: number = Math.floor(Math.random() * array.length);
      const randomQuestion: string = array[randomIndex];
      if (!selectedQuestions.includes(randomQuestion)) {
        selectedQuestions.push(randomQuestion);
      }
    }
    return selectedQuestions;
  }
}
