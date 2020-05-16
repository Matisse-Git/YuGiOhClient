import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isUndefined } from 'util';
import { Card } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiLink: string = "https://localhost:44361/api/v1/cards";

  constructor(
    private http: HttpClient) { }

  getAllCards(page: number, pageSize: number, sort: string, dir: string) {
    if (isUndefined(sort) || isUndefined(dir)) {
      return this.http.get<any>(this.apiLink + "?page=" + page.toString() + "&length=" + pageSize.toString());
    }
    else {
      return this.http.get<any>(this.apiLink + "?page=" + page.toString() + "&length=" + pageSize.toString() + "&sort=" + sort + "&dir=" + dir);
    }
  }

  getCardById(id: string){
    return this.http.get<any>(this.apiLink + "/" + id);
  }


  postCard (card: Card, cardType: string){
    return this.http.post(this.apiLink + "?cardtype=" + cardType,  card)
  }

  putCard(card: Card, cardType: string){
    return this.http.put(this.apiLink + "?cardtype=" + cardType,  card);
  }

}
