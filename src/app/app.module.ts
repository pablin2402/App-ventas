import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavContent, MatSidenavModule, MatSnackBarModule,
         MatToolbarModule, MatBadgeModule, MatListModule, MatTabsModule,
         MatSliderModule
       } from '@angular/material';

//Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CustommaterialModule } from './custommaterial.module';
import { ConfiguracionesComponent } from './components/configuraciones/configuraciones.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent} from './components/modal/modal.component';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { CompraComponent } from './components/compra/compra.component';
//import { AdminComponent } from './admin/admin/admin.component';

//Modulos
import { SharedModule } from "./shared/shared.module";
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import { from } from 'rxjs';

//FIREBASE CONFIGURACION
export const firebaseConfig =environment.firebaseConfig;

import { environment } from "../environments/environment";

import { importExpr } from '@angular/compiler/src/output/output_ast';



import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestore }from '@angular/fire/firestore';
import { AngularFirestoreModule } from "angularfire2/firestore";


const MaterialComponents = [
  MatButtonModule
];


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    UserComponent,
    FooterComponent,
    ConfiguracionesComponent,
    AddBookComponent,
    NavbarComponent,
    HomeComponent,
    GoogleMapComponent,
    ModalComponent,
    DetailsBookComponent,
    RegistroComponent,
    LoginComponent,
    NavTabsComponent,
    AboutusComponent,
    ContactoComponent,

    CompraComponent,
    

    CarritoComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
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
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
        apiKey: 'API'
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AuthModule,
    AdminModule,
    ShopModule
  ],
  exports: [
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatSnackBarModule,
    MaterialComponents
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
