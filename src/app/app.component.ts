import { Component, OnInit } from '@angular/core';
import {JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  questionInfo;
  userScore: number = 0;

  constructor(private jeopardyService: JeopardyService){}

  getDataFromService(){
    this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
  }

  evaluateAnswer(answer: string){
    if (answer.toLowerCase() == this.questionInfo.answer.toLowerCase()){
      this.userScore += this.questionInfo.value;
    } else if (this.questionInfo.value <= this.userScore){
      this.userScore -= this.questionInfo.value;
    }
    this.getDataFromService();
  }

  ngOnInit(){
    this.getDataFromService()
  }

}
