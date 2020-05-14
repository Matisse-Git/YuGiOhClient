import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient) { }

  getAllCards(page: number, pageSize: number){
    return this.http.get<any>("https://localhost:44361/api/v1/cards?page=" + page.toString() + "&length=" + pageSize.toString());
  }
}
