import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from "../shared/shared.module";
import { AngularFireAuthModule } from "angularfire2/auth";
//import { FormComponent } from './form/form.component';
import { AuthGuard } from '../guards/auth.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AngularFireAuthModule,
    SharedModule
  ],
  providers: [AuthService, AuthGuard]
})

export class AuthModule { }
