import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AthleteListComponent } from './components/athlete-list/athlete-list.component';

import {AthleteService} from './services/athlete.service';

@NgModule({
  declarations: [
    AppComponent,
    AthleteListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [AthleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
