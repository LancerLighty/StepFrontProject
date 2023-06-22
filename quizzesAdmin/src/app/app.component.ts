import { Component } from '@angular/core';
import { Answer } from './answer.model';
import { InfoService } from './info/info.service';
import { Questions } from './questions.model';
import { Quizzes } from './quizzes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizzes';
  constructor(private dtshr:InfoService){}
 ngOnInit(): void {
    
  }
}
