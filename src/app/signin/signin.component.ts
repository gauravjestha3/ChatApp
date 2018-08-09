import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../auth-user.service';
import { FormsModule } from '@angular/forms';
import {
  AuthService,
  GoogleLoginProvider, 
} from 'angular-6-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private socialAuthService: AuthService, private routes: Router) { }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    } 
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
    //we save our data to local storage because we want our email id to next page.
      (userData) => {
        localStorage.setItem('key',JSON.stringify(userData));
        this.routes.navigate(['/main'])
      }
    );
  }

}
