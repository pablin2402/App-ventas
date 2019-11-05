import { Component, Input, OnInit,EventEmitter, Output} from '@angular/core';
import { fallIn, moveIn} from 'src/app/router.animation';
import { BackendService } from '../services/backend.service';
import{ AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {ProfileComponent}from 'src/app/components/profile/profile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],


})

export class HeaderComponent  implements OnInit{
  //NOMBRE APP
  public app_name:string ="Tienda";
  //condicion para hacer aparecer etiquetas
  public isLogged = false;




 @Output() SideNavigationToggle=new  EventEmitter();

  @Input() pageTitle: string;
  @Input() iconTitle: string;
  @Input() helpTitle: string;

  configData;
  counter=0;
  userStatusColor="warm";

  cart: any;
  constructor(
    public auth: AuthService,
    private _backendservice: BackendService,
    private authService: AuthService,
    private afsAuth: AngularFireAuth,
    public dialog: MatDialog
      )
  {}

  openDialog() {
    const dialogRef = this.dialog.open(ProfileComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit()
  {
      this.getCurrentUser();
  }

  onToggleOpenSideNav(){
      this.SideNavigationToggle.emit();

  }

  getCurrentUser() {
    this.authService.isAuth().subscribe(auth => {
      if (auth) {
        console.log('user logged');
        this.isLogged = true;
      } else {
        console.log('NOT user logged');
        this.isLogged = false;
      }
    });
  }
  onLogout() {
    this.afsAuth.auth.signOut();
  }
}

