import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AthleteListComponent } from './components/athlete-list/athlete-list.component';
import { CoachListComponent } from './components/coach-list/coach-list.component';

import { AthleteService } from './services/athlete/athlete.service';
import { CoachService } from './services/coach/coach.service';

@NgModule({
  declarations: [
    AppComponent,
    AthleteListComponent,
    CoachListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AthleteService, CoachService],
  bootstrap: [AppComponent]
})
export class AppModule { }
