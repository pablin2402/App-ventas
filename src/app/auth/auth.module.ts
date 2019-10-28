import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from "../shared/shared.module";
import { AngularFireAuthModule } from "angularfire2/auth";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    SharedModule
  ],
  providers: [AuthService]
})

export class AuthModule { }
