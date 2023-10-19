import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { AuthService } from '../authentication/auth.service';
import { InfoService } from '../info/info.service';
import { Questions } from '../questions.model';
import { ResultService } from '../resultsave/result.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  quest:any[] = []
  answer:number[] = []
  resultInfo: any;
  usersarr:any = []
  i!:any
  constructor(private actroute:ActivatedRoute, private info:InfoService,private router: Router, private result:ResultService, private auth:AuthService) { }
  ngOnInit(): void {
    this.actroute.params.subscribe((par:Params)=> {
      this.resultInfo = par
    })
    if(this.result.questions[0] == null){
      this.router.navigate(["/quizzes"])
    }
    this.quest = this.result.questions
    this.answer = this.result.chosen
    if(this.auth.isLoggedIn()){
      var userlocal = localStorage.getItem("qlogin")|| "" ;
      var user = JSON.parse(userlocal).id
    }
  }
  quizzes(){
    this.router.navigate([`/quizzes`]);
  }
}
