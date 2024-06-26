import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info/info.service';
import { Quizzes } from '../quizzes.model';

@Component({
  selector: 'app-quizsubjects',
  templateUrl: './quizsubjects.component.html',
  styleUrls: ['./quizsubjects.component.css']
})
export class QuizsubjectsComponent implements OnInit {

  constructor(private dtshr:InfoService){}
  arr:any[] = []
  error:string= ""
  myQuiz:Quizzes = new Quizzes();
  ngOnInit(): void {
    this.dtshr.getQuiz().subscribe((data:any) => {
      this.arr = data.docs.map((x: any) => {
        const dt = x.data();
        dt.id = x.id;
        return dt;
      });
      // this.jsArr = this.arr.filter(i=> i.subjectName == "js")[0].questions
      // console.log(this.jsArr)
    })
  }
  addQuiz(){
    if(this.myQuiz.subjectName != ""){
      this.error = "Added Succesfully"
      let quizzObj = Object.assign({},this.myQuiz)
      this.dtshr.addQuiz(quizzObj).then((data: any) => {
        quizzObj.id = data.id;
        this.arr.push(quizzObj);
      });
      this.myQuiz = new Quizzes();
    } else {
      this.error = "Enter Quiz Name!"
    }
  }
}
