import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InfoService } from '../info/info.service';
import { Questions } from '../questions.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
  newArr: any;

  constructor(private actroute:ActivatedRoute, private info:InfoService,private router: Router) { }
  subjectinfo:any = {}
  arr:any[] =[]
  questions:Questions[] = [];
  question:Questions = new Questions;
  questindex:number = 0
  choice1!:number
  count:number = 0
  ngOnInit(): void {
    this.actroute.params.subscribe((par:Params)=> {
      this.subjectinfo = par
      this.info.getQuiz().subscribe((data:any) => {
        this.arr = data.docs.map((x: any) => {
          const dt = x.data();
          dt.id = x.id;
          return dt;
        });
        this.newArr = this.arr.filter(i=> i.subjectName == this.subjectinfo.subjectname)[0].questions

        this.questions = this.info.ranQuestions(this.newArr) as any

        this.question = this.questions[this.questindex]
      })
    })

  }
  nextQuestion(){
    if((this.question.correctAnswer as unknown as number) == this.choice1){
      this.count++
    }
    if(this.questindex == 19){
      this.router.navigate([`/quizzes/${this.subjectinfo.subjectname}/finished/${this.count}`]);
    }
    this.questindex++
    this.question = this.questions[this.questindex]
    this.choice1 = Math.max();
    const radioButtons = document.querySelectorAll('input[name="radioGroup"]');
    radioButtons.forEach((radioButton) => {
      (radioButton as HTMLInputElement).checked = false;
    });
  
  }
}
