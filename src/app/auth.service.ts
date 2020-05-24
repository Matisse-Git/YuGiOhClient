import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RepositionScrollStrategy } from '@angular/cdk/overlay';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  postUrl: string;
  private clientID: string = "1024860671467-mn4u2u2h0ku7bb9v8en1jh0jfubqesoj.apps.googleusercontent.com";
  private clientSecret: string = "xb2w4OQVbTY20RFOv-YTWD2c";
  private redirectUrl: string = "http%3A%2F%2Flocalhost%3A4200%2Flogin";

  getProfileUrl: string = "https://www.googleapis.com/userinfo/v2/me";

  constructor(private http: HttpClient, private cookie: CookieService) { }

  postGoogleAuth(authCode: string) {
    this.postUrl = "https://www.googleapis.com/oauth2/v4/token?code=" + authCode + "&client_id=" + this.clientID + "&client_secret=" + this.clientSecret + "&redirect_uri=" + this.redirectUrl + "&grant_type=authorization_code";
    return this.http.post<IAuthResp>(this.postUrl, '')
  }

  getUserInfo() {
    return this.http.get<IProfile>(this.getProfileUrl, {
      headers: {
        'Authorization': 'Bearer ' + this.cookie.get('auth')
      }
    });
  }

  logOut(){
    this.cookie.deleteAll();
  }
}

export interface IAuthResp {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string,
  id_token: string;
}

export interface IProfile {
  id: number;
  name: string;
  family_name: string;
  given_name: string;
  picture: string;
  locale: string;
}
