import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms';
//import { SnackService } from "@common/snack.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit
{

  createFormGroup()
  {

    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(5)]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    });

  }

  RegistroForm: FormGroup;

  constructor(private router: Router, private authService: AuthService)//, public snackService: SnackService)
  {

  }

  ngOnInit()
  {

  }

  public email: string = '';
  public password: string = '';

  onAddUser()
  {

    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        //const userJson = res.toJSON();

         //  this.snackService.launch('Registrado correctamente, Iniciando sesion.', 'Alta usuario', 4000);

         //const data ={
          // id: userJson.id,
          // name: userJson.name,
      //     email: userJson.email,
        //   password: userJson.password,
    //       role: 'Cliente'
  //       };
    //this.afs.collection('users').doc(userJson.id).set(data)
           this.router.navigate(['/home'])

         }).catch(err => console.log('err', err.message));

         }

  onLoginGoogle()
  {
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.authService.loginGoogleUser()
    .then((res) => {
      this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));

  }

  onLoginFacebook()
  {

    this.authService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
            }).catch(err => console.log('err', err.message));

  }

  onLogout()
  {

    this.authService.logoutUser();

  }

  onLoginRedirect(): void
  {

    this.router.navigate(['/home']);

  }

}
