import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isUndefined } from 'util';
import { Card } from './app.module';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiLink: string = "https://yugiohapi-278211.appspot.com/api/v1/cards";

  constructor(
    private http: HttpClient, private cookie: CookieService, private toastr: ToastrService) { }

  getAllCards(page: number, pageSize: number, sort: string, dir: string) {
    if (isUndefined(sort) || isUndefined(dir)) {
      return this.http.get<any>(this.apiLink + "?page=" + page.toString() + "&length=" + pageSize.toString(), {
        headers: {
          'Authorization': "Bearer " + this.cookie.get('apiAuth')
        }
      });
    }
    else {
      return this.http.get<any>(this.apiLink + "?page=" + page.toString() + "&length=" + pageSize.toString() + "&sort=" + sort + "&dir=" + dir, {
        headers: {
          'Authorization': "Bearer " + this.cookie.get('apiAuth')
        }
      });
    }
  }

  getCardById(id: string){
    return this.http.get<any>(this.apiLink + "/" + id, {
      headers: {
        'Authorization': "Bearer " + this.cookie.get('apiAuth')
      }
    });
  }


  postCard (card: Card, cardType: string){
      return this.http.post(this.apiLink + "?cardtype=" + cardType,  card, {
        headers: {
          'Authorization': "Bearer " + this.cookie.get('apiAuth')
        }
      });
  }

  putCard(card: Card, cardType: string){
    return this.http.put(this.apiLink + "?cardtype=" + cardType,  card, {
      headers: {
        'Authorization': "Bearer " + this.cookie.get('apiAuth')
      }
    });
  }

  deleteCard(cardID: number){
    return this.http.delete(this.apiLink + "/" + cardID.toString(), {
      headers: {
        'Authorization': "Bearer " + this.cookie.get('apiAuth')
      }
    });
  }

}
