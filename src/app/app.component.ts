import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  questionInfo;
  categoryInfo;
  selectedCategory;
  userScore: number = 0;

  constructor(private jeopardyService: JeopardyService) { }

  getRandomIntInclusive(min = 0, max) {
    if (max > 100) {
      max = 100;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getQuestionDataFromService() {
    this.jeopardyService.getQuestionInfo(this.selectedCategory.id)
      .subscribe(
      questionInfo => {
        this.questionInfo = questionInfo[this.getRandomIntInclusive(0, this.selectedCategory.clues_count - 1)];
        console.log(this.questionInfo.answer);
      }
      )

  }

  getCategoriesFromService() {
    this.jeopardyService.getCategories()
      .subscribe(
      categoryInfo => {
        this.categoryInfo = categoryInfo;
      }
      )

  }


  evaluateAnswer(answer: string) {
      if (answer.toLowerCase() == this.questionInfo.answer.toLowerCase()) {
        this.userScore += this.questionInfo.value;
      } else if (this.questionInfo.value <= this.userScore) {
        this.userScore -= this.questionInfo.value;
      }
      this.getCategoriesFromService();
      this.selectedCategory = null;
  }

  clickedCategory(category) {
    this.selectedCategory = category;
    this.getQuestionDataFromService();
  }

  ngOnInit() {
    this.getCategoriesFromService();

  }

}
