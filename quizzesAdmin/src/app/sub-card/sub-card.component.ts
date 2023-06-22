import { Component, Input, OnInit } from '@angular/core';
import { Questions } from '../questions.model';
import { Quizzes } from '../quizzes.model';

@Component({
  selector: 'app-sub-card',
  templateUrl: './sub-card.component.html',
  styleUrls: ['./sub-card.component.css']
})
export class SubCardComponent implements OnInit {
  @Input()
  subject:any= {}
  constructor() { }

  ngOnInit(): void {
  }

}
