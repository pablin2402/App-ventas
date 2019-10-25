import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { CustommaterialModule } from './custommaterial.module';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatSidenavContent, MatSidenavModule, MatToolbarModule, MatBadgeModule, MatListModule, MatTabsModule} from '@angular/material';
import { ConfiguracionesComponent } from './components/configuraciones/configuraciones.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './components/add-book/add-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FlexLayoutModule } from '@angular/flex-layout';

import {AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import{AngularFireAuth} from '@angular/fire/auth';


import { from } from 'rxjs';
//FIREBASE CONFIGURACION 


import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';


const MaterialComponents = [
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    FooterComponent,
    ConfiguracionesComponent,
    AddBookComponent,
    NavbarComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    NavTabsComponent,
    AboutusComponent
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    CustommaterialModule,
    HttpClientModule,
    MaterialComponents,
    MatSidenavModule,
    MatToolbarModule,
    MatBadgeModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FlexLayoutModule,
    BrowserAnimationsModule,

    FormsModule
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MaterialComponents
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
