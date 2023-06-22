import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndQuizComponent } from './end-quiz/end-quiz.component';
import { LogInComponent } from './log-in/log-in.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
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
  {path:"SignUp", component:SignUpComponent},
  {path:"logIn", component:LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
