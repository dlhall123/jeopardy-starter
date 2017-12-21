import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {JeopardyService } from './jeopardy.service';
import { AnswerHandlerComponent } from './answer-handler/answer-handler.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerHandlerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    JeopardyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
