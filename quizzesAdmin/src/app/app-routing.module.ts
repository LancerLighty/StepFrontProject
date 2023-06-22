import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditQuestionsComponent } from './edit-questions/edit-questions.component';
import { QuizsubjectsComponent } from './quizsubjects/quizsubjects.component';

const routes: Routes = [
  {path:'', component:QuizsubjectsComponent},
  {path:'questions/:codename/:codeid', component:EditQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
