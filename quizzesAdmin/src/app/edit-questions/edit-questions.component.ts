import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { InfoService } from '../info/info.service';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css']
})
export class EditQuestionsComponent implements OnInit {
  newArr: any[]= [];

  constructor(private actroute:ActivatedRoute, private dtshr:InfoService) { }
  subjectid:any = {}
  arr:any[] =[]
  ngOnInit(): void {
    this.actroute.params.subscribe((par:Params)=> {
      this.subjectid = par
      console.log(this.subjectid)
    })

  }
}
