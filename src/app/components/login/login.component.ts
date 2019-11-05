import { Component, EventEmitter ,OnInit, Input, Output } from '@angular/core';
import{AngularFireAuth} from '@angular/fire/auth';
import{auth}from 'firebase/app';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators, NgForm, FormGroupDirective} from '@angular/forms';
import { SnackService } from '../../common/snack.service';
import { ErrorStateMatcher} from "@angular/material";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public email: string ='';
  public password='';

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    public auth: AuthService,
    public afs: AngularFirestore
    )
    {

    }

  ngOnInit()
  {

  }

  onLogin(): void
  {

    this.auth.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      //  this.appService.stopLoader();
            }).catch(err => console.log('err', err.message));

  }

  onLoginGoogle()

  {
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.auth.loginGoogleUser()
    .then((res) => 
    {
      this.onLoginRedirect();
    }).catch(err => console.log('err', err.message));

  }

  onLoginFacebook()
  {

    this.auth.loginFacebookUser()
      .then((res) => 
      {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));

  }

  onLogout()
  {

    this.auth.logoutUser();

  }

  onLoginRedirect(): void
  {

    this.router.navigate(['/home']);

  }

}
