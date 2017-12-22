import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JeopardyService {


  private categoriesUrl: string = "http://jservice.io/api/categories?count=3&offset="; 

  //private questionUrl: string = "http://jservice.io/api/random";

  private questionUrl: string = "http://jservice.io/api/clues?category=";

  constructor(private http: Http) { }

  // getQuestionInfo(): Observable<any> {

  //   return this.http.get(this.questionUrl)
  //     .map(result => {
  //       return result.json()
  //     })

  // }

  getCategories(): Observable<any> {

    return this.http.get(this.categoriesUrl + Math.round(Math.random()*100))
      .map(result => {
        return result.json()
      })

  }

  getQuestionInfo(categoryId){
     return this.http.get(this.questionUrl + categoryId)
     .map(result => {
        return result.json()
       })
  }



}