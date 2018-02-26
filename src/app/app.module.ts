import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule,
    FormsModule
  ],
  providers: [AthleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
