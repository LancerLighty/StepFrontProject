import { Component } from '@angular/core';
import { InfoService } from './info/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizzes';
  constructor(private dtshr:InfoService){}
}
