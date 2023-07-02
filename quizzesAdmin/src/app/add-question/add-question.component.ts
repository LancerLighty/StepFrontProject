import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Answer } from '../answer.model';
import { InfoService } from '../info/info.service';
import { Questions } from '../questions.model';
import { Quizzes } from '../quizzes.model';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  newArr:any;
  arr: any[] = [];
  @Input()
  subid:any = {};
  answersForm!:FormGroup
  newArr1: any;
  constructor (private dtshr:InfoService, private fb:FormBuilder) { 
    this.answersForm = this.fb.group({
      answers:this.fb.array([])
    })
  }
  getAnswers(){
    return this.answersForm.get("answers") as FormArray;
  }
  deleteAns(jobIndex:number){
    return this.getAnswers().removeAt(jobIndex)
  }
  newAns(){
    return this.fb.group({
      answerr:''
    })
  }
  addNewAns(){
    return this.getAnswers().push(this.newAns())
  }
  myQuiz:Quizzes = new Quizzes();
  // myAnswer1:Answer = new Answer();
  // myAnswer2:Answer = new Answer();
  // myAnswer3:Answer = new Answer();
  myQuestion:Questions = new Questions();
  ngOnInit(): void {
    this.dtshr.getQuiz().subscribe((data:any) => {
      this.arr = data.docs.map((x: any) => {
        const dt = x.data();
        dt.id = x.id;
        return dt;
      });
      this.newArr1 = this.arr.filter(i=> i.subjectName == this.subid.codename)[0]
      this.newArr = this.newArr1.questions
    })
    
  }
  delete(index:number){
    this.newArr1.questions.splice(index, 1)
    this.dtshr.deleteQuestion(this.newArr1.id,this.newArr1)
  }
  error:string = ""
  checkanswers(){
    const answers = this.answersForm.get('answers') as FormArray;
    for (let i = 0; i < answers.length; i++) {
      const answer = answers.at(i) as FormGroup;
      if(answer.get('answerr')?.value == ""){
        return true
      }
    }
    return false
  }
  addQuestion(){
    const answers = this.answersForm.get('answers') as FormArray;
    if(this.getAnswers().controls.length < 2){
      this.error = "enter et least 2 answers"
    } else if (this.myQuestion.quest == "" || this.checkanswers()){
      this.error = "fill all inputs"
    } else {
      this.myQuestion.correctAnswer =  this.myQuestion.correctAnswer - 1
      this.error = ""
      this.myQuestion.subjectId =this.subid.codeid
      for (let i = 0; i < answers.length; i++) {
        const answer = answers.at(i) as FormGroup;
        this.myQuestion.answers.push(answer.get('answerr')?.value);
      }
      let currentSubject = this.arr.filter(i=> i.id == this.myQuestion.subjectId)[0]
      let crsbj = Object.assign({}, currentSubject)
      let randId = Math.random()*9999999999999

      let myqs = Object.assign({},this.myQuestion)
      myqs.id = randId
      currentSubject.questions.push(myqs)
      this.myQuestion = new Questions()
      this.dtshr.updateQuiz(crsbj.id,crsbj)
    }
  }
}
