import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardService } from './authguard/authguard.service';
import { EditQuestionsComponent } from './edit-questions/edit-questions.component';
import { LoginComponent } from './login/login.component';
import { QuizsubjectsComponent } from './quizsubjects/quizsubjects.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'quizzes', component: QuizsubjectsComponent, canActivate: [AuthguardService] },
  { path: 'questions/:codename/:codeid', component: EditQuestionsComponent, canActivate: [AuthguardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
