import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.css']
})
export class CategorySelectionComponent implements OnInit {
  @Input() categoryInfo;
  @Output() categorySelected = new EventEmitter();

  constructor() { }

  //Method called when a category is selected
  clickedCategory(category) {
    this.categorySelected.emit(category);
  }



  ngOnInit() {
  }

}
