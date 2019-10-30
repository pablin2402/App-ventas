import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFirestore} from 'angularfire2/firestore';
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
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  )
  {

    this.User = this.afAuth.authState.switchMap(User =>{

      if(User)
      {
        return (this.afs.doc<User>(`users/${User.uid}`).valueChanges());
      }
      else
      {
        return (Observable.of(null));
      }
    })

  }

    private oAuthLogin(provider) {
      return this.afAuth.auth.signInWithPopup(provider).then(credentials => {
        const user = credentials.user;
        this.afs.collection<User>('users', ref => ref.where('email', '==', user.email)).valueChanges().subscribe(data => {
          if(!data.length) {
            const newUser = {
              uid: user.uid,
              email: user.email,
            /*  name: user.name,*/
              role: 'Cliente'
            }
            this.afs.collection('users').doc(user.uid).set(newUser).then(() => {
              this.router.navigate(['/shop']);
              return;
            })
          }
          this.router.navigate(['/shop']);
        })
      })
    }

  googleLogin()
  {

    const provider = new firebase.auth.GoogleAuthProvider();
    return (this.oAuthLogin(provider));

  }

  emailAndPassword(email, password)//inicio de sesion
  {

    return (this.afAuth.auth.signInWithEmailAndPassword(email.value, password.value));

  }

 //registro
  signUp(email, password)
  {

    return (this.afAuth.auth.createUserWithEmailAndPassword(email, password));

  }

  //cerrar sesion
  signOut()
  {

    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/login']);
    })

  }

}
