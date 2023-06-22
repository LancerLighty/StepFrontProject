import { Questions } from "./questions.model"

export class Quizzes{
  id:string = ""
  subjectName:string = ""
  questions:any[] = []


  addQuestion(newQuestion:Questions){
    this.questions.push(newQuestion)
  }
}