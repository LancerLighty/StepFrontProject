import { Component, Input, OnInit } from '@angular/core';
import { Quizzes } from '../quizzes.model';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  @Input()
  quiz:any = {}
  constructor() { }

  ngOnInit(): void {
  }

}
