import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore} from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import * as firebase from "firebase";
import { User } from "../model/User";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  User: Observable<User>;

  constructor(
    public afsAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  )
  {

    this.User = this.afsAuth.authState.switchMap(user => {
          if( user )
          {
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
          } else
          {
            return Observable.of(null);
          }
    })

  }


    registerUser(email: string, pass: string) {
      return new Promise((resolve, reject) => {
        this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
          .then(userData => resolve(userData),
            err=>reject(err));
      });
    }


  loginEmailUser(email: string, pass:string){
    return new Promise((resolve, reject) => {
      this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData),
        err => reject(err));
    });
  }
  logoutUser() {
    return this.afsAuth.auth.signOut();
  }
  loginFacebookUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  loginGoogleUser(){
    return this.afsAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  isAuth(){
      return this.afsAuth.authState.pipe(map(auth => auth));
  }

    private oAuthLogin(provider) {
      return this.afsAuth.auth.signInWithPopup(provider).then(credentials => {
        const user = credentials.user;
        this.afs.collection<User>('users', ref => ref.where('email', '==', user.email)).valueChanges().subscribe(data => {
          if(!data.length)
          {
            const newUser = {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              /*psw : user.psw,*/
              role: 'cliente'
            }
            this.afs.collection('users').doc(user.uid).set(newUser).then(() => {
              this.router.navigate(['/homme']);
              return;
            })
          }
          this.router.navigate(['/home']);
        })
      })
    }

    googleLogin()
    {

      const provider = new firebase.auth.GoogleAuthProvider();
      return this.oAuthLogin(provider);

    }

  emailAndPassword(email, password)
  {

    return this.afsAuth.auth.signInWithEmailAndPassword(email.value, password.value);

  }

  signUp(email, password)
  {

    return this.afsAuth.auth.createUserWithEmailAndPassword(email, password);

  }

  signOut()
  {

    this.afsAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    })

  }

}
