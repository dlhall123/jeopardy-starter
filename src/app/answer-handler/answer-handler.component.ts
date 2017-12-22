import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-handler',
  templateUrl: './answer-handler.component.html',
  styleUrls: ['./answer-handler.component.css']
})
export class AnswerHandlerComponent implements OnInit {

  constructor() { }

  answer: string;

  @Output() buttonClicked = new EventEmitter();

  evaluateAnswer() {
    if (this.answer != undefined && this.answer != "") {
      this.buttonClicked.emit(this.answer);
      this.answer = "";
    } else {
      alert("Please fill in answer");
    }
  }


  ngOnInit() {
  }

}
