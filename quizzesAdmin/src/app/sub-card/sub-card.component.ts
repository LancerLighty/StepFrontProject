import { Component, Input, OnInit } from '@angular/core';
import { InfoService } from '../info/info.service';
import { Questions } from '../questions.model';
import { Quizzes } from '../quizzes.model';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-sub-card',
  templateUrl: './sub-card.component.html',
  styleUrls: ['./sub-card.component.css']
})
export class SubCardComponent implements OnInit {
  @Input()
  subject:any= {}
  constructor(private info:InfoService, private router:Router) { }
  del:boolean = true
  ngOnInit(): void {
  }
  delete(){
    this.info.deleteQuiz(this.subject.id)
    this.del = false
  }

}
