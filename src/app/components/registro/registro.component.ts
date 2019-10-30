import { Component, EventEmitter ,OnInit, Input, Output, Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, NgForm, FormGroupDirective} from '@angular/forms';
import { SnackService } from '../../common/snack.service';
import { ErrorStateMatcher} from "@angular/material";
import { AngularFirestore } from "angularfire2/firestore";
import { Title } from "@angular/platform-browser";
import { AppService } from '../../common/app.service';

export class FormErrorStateMatcher implements ErrorStateMatcher
{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean
  {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit
{

  @Output() onSubmit = new EventEmitter<any>();
  @Input() btnText: string;

  createFormGroup()
  {

    return new FormGroup({

      email: new FormControl('', [
        Validators.required, Validators.minLength(5), Validators.email]),

      password: new FormControl('', [
        Validators.required, Validators.minLength(5)]),

    });

  }

  RegistroForm: FormGroup;
  matcher = new FormErrorStateMatcher();

  constructor(
    public auth: AuthService,
    public snackService: SnackService,
    public afs: AngularFirestore,
    private title: Title,
    private router: Router,
    private appService: AppService)
  {

  }
  ngOnInit()
  {
    this.title.setTitle('Registro en la tienda');
  }

  public email: string = '';
  public password: string = '';

  submit(email, password)//envia datos al registro
  {

    this.onSubmit.emit({email,password});

  }

  onAddUser()
  {

    this.auth.registerUser(this.email, this.password)
      .then((res) => {
         this.router.navigate(['/home'])

         }).catch(err => console.log('err', err.message));

 }

  onLoginGoogle()
  {
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.auth.loginGoogleUser()
    .then((res) => {
      this.onLoginRedirect();
        }).catch(err => console.log('err', err.message));

  }

  onLoginFacebook()
  {

    this.auth.loginFacebookUser()
      .then((res) => {
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

  ///////////////////////////////////////////////
  signUp(user) {
    this.appService.fireLoader();

    this.auth.signUp(user.email.value, user.password.value).then((value) => {
      //const userJson = value.toJSON();
      this.snackService.launch('Registro correcto, iniciando sesión', 'Alta usuario', 5000);

      const data = {
        //uid: userJson.uid,
        email: user.email.value,
        displayName: user.email.value,
        photoUrl: null,
        role: 'customer'
      };

  /*    this.afs.collection('users').doc(userJson.uid).set(data)
        .then(() => {
          this.appService.stopLoader();
          this.auth.emailAndPassword(user.email, user.password).then(() => {
            this.router.navigate(['/shop']);
          })
        })
        .catch(error => {
          this.appService.stopLoader();
        })
    })
    .catch(err => {
      this.appService.stopLoader();
      this.snackService.launch("Error: " + err.message, "Alta usuario", 5000);
  */  });
  }

}
