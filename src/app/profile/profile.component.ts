import { Component, OnInit } from '@angular/core';
import { IProfile, AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: IProfile

  constructor(private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.auth.getUserInfo().subscribe( userInfo =>{
      this.currentUser = userInfo;
    })
  }

  Logout(){
    this.auth.logOut();
    this.toastr.success("Succesfully cleared cookies and logged out!", "Logged out!")
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
}
