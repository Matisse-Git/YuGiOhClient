import { Component, OnInit } from '@angular/core';
import { AuthService, IProfile } from '../auth.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  currentProfile: IProfile;

  private clientID: string = "1024860671467-mn4u2u2h0ku7bb9v8en1jh0jfubqesoj.apps.googleusercontent.com";
  private clientSecret: string = "xb2w4OQVbTY20RFOv-YTWD2c";
  private redirectUrl: string = "http%3A%2F%2Flocalhost%3A4200%2Flogin";

  private authCode: string;
  showLogin: boolean = true;

  constructor(private auth: AuthService, private route: ActivatedRoute) {
      this.route.queryParamMap.subscribe(params =>{
          if (params.get('code') != null){
            console.log("Code received from OAuth")
            this.showLogin = false;
            this.authCode = params.get('code');
            this.auth.postGoogleAuth(this.authCode).subscribe(resp =>{
              console.log(resp);
            })
          }
      })
   }
  
  ngOnInit(): void {
  }

  AutherizeGoogle(){
    document.location.href = "https://accounts.google.com/o/oauth2/v2/auth?client_id=" + this.clientID + "&redirect_uri=" + this.redirectUrl + "&scope=profile" + "&response_type=code"
  }
}
