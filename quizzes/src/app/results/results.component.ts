import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { InfoService } from '../info/info.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  arr: any;
  newArr:any;
  constructor(private actroute:ActivatedRoute, private info:InfoService,private router: Router, private route:Route) { }
  resultInfo:any = {}
  correctCount: number = 0;
  totalQuestions: number = 0;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.correctCount = params['correctCount'];
      this.totalQuestions = params['totalQuestions'];
      this.info.getQuiz().subscribe((data:any) => {
        this.arr = data.docs.map((x: any) => {
          const dt = x.data();
          dt.id = x.id;
          return dt;
        })
        // this.newArr = this.arr.filter((i: { subjectName: any; })=> i.subjectName == this.arr.subjectname)[0].questions
        // for(let i of this.arr){
        // }
      })
    })
  }
  quizzes(){
    this.router.navigate([`/quizzes`]);
  }
}
