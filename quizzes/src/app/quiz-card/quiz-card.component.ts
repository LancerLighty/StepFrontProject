import { Component, Input, OnInit } from '@angular/core';
import { AdfavService } from '../addfav/adfav.service';
import { Quizzes } from '../quizzes.model';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {
  @Input()
  quiz:any = {}
  constructor(private adfav:AdfavService) { }
  isYellowColor:boolean = false
  ngOnInit(): void {
    this.adfav.getFav().subscribe((data:any) => {
      let favourites = data.docs.map((x: any) => {
        const dt = x.data();
        dt.id = x.id;
        return dt;
      });
      let user = localStorage.getItem("qlogin") || ""
      for(let i of favourites){
        if(i.fav == this.quiz.subjectName && i.userid == JSON.parse(user).id){
          this.isYellowColor = true
        }
      }
    })
  }
  
  fav(){
    if(!localStorage.getItem("qlogin")){
      this.isYellowColor = true
      alert("you need to log in to add to favourites!")
    } else {
      if(!this.isYellowColor){
        this.isYellowColor = true
        let user = localStorage.getItem("qlogin") || ""
        let favourite = {
          userid: JSON.parse(user).id || "",
          fav:this.quiz.subjectName,
          id: "",
        }
        this.adfav.addFav(favourite).then((data: any) => {
          favourite.id = data.id;
        });
        alert("Added to favourites!")
      } else {
        let user = localStorage.getItem("qlogin") || ""
        this.adfav.getFav().subscribe((data:any) => {
          let favourites = data.docs.map((x: any) => {
            const dt = x.data();
            dt.id = x.id;
            return dt;
          });
          let user = localStorage.getItem("qlogin") || ""
          let fav = { id: "" }
          for(let i of favourites){
            if(i.fav == this.quiz.subjectName && i.userid == JSON.parse(user).id){
              fav = i
            }
          }
          this.adfav.deleteFav(fav.id)
          this.isYellowColor = false
        })
      }
    }
  }

}
