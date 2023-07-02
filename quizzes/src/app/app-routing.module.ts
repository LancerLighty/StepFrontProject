import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard/authguard.service';
import { AuthguarderService } from './authguard/authguarder.service';
import { ErrorpageComponent } from './authguard/errorpage/errorpage.component';
import { EndQuizComponent } from './end-quiz/end-quiz.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { LogInComponent } from './log-in/log-in.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { SuccesfullsuComponent } from './succesfullsu/succesfullsu.component';
import { WelcomeComponent } from './welcome/welcome.component';

const arrayParamMatcher = (segments: string[], segmentGroup: any, route: any) => {
  const param = segments[0];
  // Check if the parameter is a valid JSON array
  try {
    JSON.parse(param);
    return { consumed: [segments[0]] };
  } catch {
    return null;
  }
};

const routes: Routes = [
  {path:"", component:WelcomeComponent},
  {path:"quizzes", component:QuizzesComponent},
  {path:"quizzes/:subjectname/:id", component:StartQuizComponent},
  {path:"quizzes/:subjectname/finished/:count", component:EndQuizComponent},
  {path:"signup", component:SignUpComponent, canActivate: [AuthguarderService]},
  {path:"login", component:LogInComponent, canActivate: [AuthguarderService] },
  {path:"signup/succesfull", component:SuccesfullsuComponent, canActivate: [AuthguarderService] },
  {path:"favourites", component:FavouritesComponent, canActivate: [AuthguardService] },
  {path:"**", component:ErrorpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
