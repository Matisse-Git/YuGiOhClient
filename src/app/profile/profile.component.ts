import { Component, OnInit } from '@angular/core';
import { IProfile, AuthService } from '../auth.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: IProfile

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUserInfo().subscribe( userInfo =>{
      this.currentUser = userInfo;
    })
  }

  Logout(){
    this.auth.logOut();
  }
}
