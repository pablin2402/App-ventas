import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });
  }
  RegistroForm: FormGroup;
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit() {
  }

  public email: string = '';
  public password: string = '';
  
  onAddUser() {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.router.navigate(['/home'])
          
        
      }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(){
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.authService.loginGoogleUser()
    .then((res) => {
      this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));
  }

  onLoginFacebook(){
    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
            }).catch(err => console.log('err', err.message));

  }
  onLogout() {
    this.authService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['/home']);
  }



}
