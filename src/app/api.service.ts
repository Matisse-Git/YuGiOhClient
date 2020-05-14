import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient) { }

  getAllCards(page: number, pageSize: number, sort: string, dir: string){
    if (!isUndefined(sort) && !isUndefined(dir)){
      return this.http.get<any>("https://localhost:44361/api/v1/cards?page=" + page.toString() + "&length=" + pageSize.toString());
    }
    else{
      return this.http.get<any>("https://localhost:44361/api/v1/cards?page=" + page.toString() + "&length=" + pageSize.toString() + "&sort=" + sort + "&dir=" + dir);
    }

  }
}
