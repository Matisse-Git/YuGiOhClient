import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    postUrl: string;
    private clientID: string = "1024860671467-mn4u2u2h0ku7bb9v8en1jh0jfubqesoj.apps.googleusercontent.com";
    private clientSecret: string = "xb2w4OQVbTY20RFOv-YTWD2c";
    private redirectUrl: string = "http%3A%2F%2Flocalhost%3A4200%2Flogin";
  
  /*let url = 'https://www.googleapis.com/oauth2/v4/token' +
  '?code=' + code +
  '&client_id=' + clientID + 
  '&client_secret=' + secret + 
  '&redirect_uri=' + redirectUrl + 
  '&grant_type=authorization_code'*/
  //must be a POST !


  constructor(private http: HttpClient) { }

  postGoogleAuth(authCode: string){
    this.postUrl = "https://www.googleapis.com/oauth2/v4/token?code=" + authCode  + "&client_id="  + this.clientID + "&client_secret=" + this.clientSecret + "&redirect_uri=" + this.redirectUrl + "&grant_type=authorization_code";
    return this.http.post(this.postUrl, '')
  }
}

export interface IProfile{
  id: number;
  name: string;
  given_name: string;
  picture: string;
  locale: string;
}
