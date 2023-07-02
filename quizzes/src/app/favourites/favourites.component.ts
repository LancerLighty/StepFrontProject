import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AdfavService } from '../addfav/adfav.service';
import { InfoService } from '../info/info.service';
import { Quizzes } from '../quizzes.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private adfav:AdfavService, private info:InfoService) { }
  quizzes:any[] = []
  sortQuizzes:any[] =[]
  ngOnInit(): void {
    this.info.getQuiz().subscribe((data:any) => {
        this.quizzes = data.docs.map((x: any) => {
          const dt = x.data();
          dt.id = x.id;
          return dt;
        });
        this.adfav.getFav().subscribe((data:any) => {
          let favourites = data.docs.map((x: any) => {
          const dt = x.data();
          dt.id = x.id;
          return dt;
        });
        let user = localStorage.getItem("qlogin") || ""
        let user1 = JSON.parse(user)
        for(let i of favourites){
          if(i.userid == user1.id){
            for(let y of this.quizzes){
              if(i.fav == y.subjectName){
                this.sortQuizzes.push(y)
              }
            }
          }
        }
      })
    })
  }
}
