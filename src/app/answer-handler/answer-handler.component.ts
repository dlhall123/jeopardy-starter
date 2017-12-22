import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-handler',
  templateUrl: './answer-handler.component.html',
  styleUrls: ['./answer-handler.component.css']
})
export class AnswerHandlerComponent implements OnInit {
  answer: string;
  userScore: number = 0;
  @Input() questionInfo;
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  evaluateAnswer() {
    if (this.answer != undefined && this.answer != "") {
      if (this.answer.toLowerCase() == this.questionInfo.answer.toLowerCase()) {
        console.log("Evaluating correct answer");
        this.userScore += this.questionInfo.value;
        console.log("Current Score is: " + this.userScore)
      } else if (this.questionInfo.value <= this.userScore) {
        this.userScore -= this.questionInfo.value;
        console.log("Eric")
      }
      this.answer = "";
      this.buttonClicked.emit();
    } else {
      alert("Please fill in answer");
    }
  }


  ngOnInit() {
  }

}
