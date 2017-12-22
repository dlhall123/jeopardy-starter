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
  categories;
  selectedCategory;
  userScore: number = 0;

  constructor(private jeopardyService: JeopardyService){}

  getQuestionDataFromService(){
    this.jeopardyService.getQuestionInfo(this.selectedCategory)
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[Math.round(Math.random()*100)];
          console.log(this.questionInfo.answer);
        }
      )
      
  }


  evaluateAnswer(answer : string){
    if(answer != undefined){
    if (answer.toLowerCase() == this.questionInfo.answer.toLowerCase()){
      this.userScore += this.questionInfo.value;
    } else if (this.questionInfo.value <= this.userScore){
      this.userScore -= this.questionInfo.value;
    }
    this.selectedCategory=null;
  } else{
    alert("Please fill in answer");
  }
  }

  clickedCategory(categoryId){
    this.selectedCategory = categoryId;
    this.getQuestionDataFromService();
  }

  ngOnInit(){
  }

}
