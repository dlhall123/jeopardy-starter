import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  questionInfo;
  categoryInfo;
  selectedCategory;

  constructor(private jeopardyService: JeopardyService) { }

  //get a random number, pulls random number based on the length of questions from the service
  getRandomIntInclusive(min = 0, max) {
    if (max > 100) {
      max = 100;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //gets a question based on selected category 
  getQuestionDataFromService() {
    this.jeopardyService.getQuestionInfo(this.selectedCategory.id)
      .subscribe(
      questionInfo => {
        this.questionInfo = questionInfo[this.getRandomIntInclusive(0, this.selectedCategory.clues_count - 1)];
        console.log(this.questionInfo.answer);
      }
      )

  }

  //gets categories from JeopardyService
  getCategoriesFromService() {
    this.selectedCategory = null;
    this.jeopardyService.getCategories()
      .subscribe(
      categoryInfo => {
        this.categoryInfo = categoryInfo;
      }
      )

  }

  //Method called when a category is selected
  clickedCategory(category) {
    this.selectedCategory = category;
    this.getQuestionDataFromService();
  }

  ngOnInit() {
    this.getCategoriesFromService();

  }

}
