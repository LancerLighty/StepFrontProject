import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { InfoService } from '../info/info.service';

@Component({
  selector: 'app-end-quiz',
  templateUrl: './end-quiz.component.html',
  styleUrls: ['./end-quiz.component.css']
})
export class EndQuizComponent implements OnInit {

  constructor(private actroute:ActivatedRoute, private info:InfoService,private router: Router) { }
  resultInfo:any = {}
  ngOnInit(): void {
    this.actroute.params.subscribe((par:Params)=> {
      this.resultInfo = par
    })
  }
  quizzes(){
    this.router.navigate([`/quizzes`]);
  }
}
