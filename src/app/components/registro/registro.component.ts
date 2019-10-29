import { Component, EventEmitter ,OnInit, Input, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, NgForm, FormGroupDirective} from '@angular/forms';
import { SnackService } from '../../common/snack.service';
import { ErrorStateMatcher} from "@angular/material";
import { AngularFirestore } from "angularfire2/firestore";

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
    private router: Router,
    private authService: AuthService)//, public snackService: SnackService)
  {

  }

  ngOnInit()
  {

  }

  public email: string = '';
  public password: string = '';

  submit(email, password)//envia datos al registro
  {

    this.onSubmit.emit({email,password});

  }

  onAddUser()
  {

    this.authService.registerUser(this.email, this.password)
      .then((res) => {
         this.router.navigate(['/home'])

         }).catch(err => console.log('err', err.message));

         }
/*
signUp(user)
{
  this.auth.signUp(user.email.value, user.password.value).then((value) =>{
    const userJson = value.toJSON();
   this.snackService.launch('Registrado correctamente, Iniciando sesion.', 'Alta usuario', 4000);
   const data ={
     uid: userJson.id,
     name: user.email.value,
     email: user.email.value,
     password: userJson.password,
     role: 'Cliente'
   };
   this.afs.collection('usuarios').doc(userJson.uid).set(data)
   .then(()=>{
     this.auth.emailAndPassword(user.email, user.password).then(()=>{
       this.router.navigate(['/home']);
     })
   })
   .catch(error => {
    this.appService.stopLoader();
     this.snackService.launch("Error " +error.message, "Alta Usuario", 4000);

   })
})
  .catch(err => {
    this.appService.stopLoader();
    this.snackService.launch("Error " +err.message, "Alta Usuario", 4000);
  })
}

*/
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
