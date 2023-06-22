import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavigationComponent } from './navigation/navigation.component';
import { LogoComponent } from './logo/logo.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuizCardComponent } from './quiz-card/quiz-card.component';
import { WelcomeimgComponent } from './welcomeimg/welcomeimg.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { EndQuizComponent } from './end-quiz/end-quiz.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LogoComponent,
    QuizzesComponent,
    WelcomeComponent,
    QuizCardComponent,
    WelcomeimgComponent,
    StartQuizComponent,
    EndQuizComponent,
    SignUpComponent,
    LogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
