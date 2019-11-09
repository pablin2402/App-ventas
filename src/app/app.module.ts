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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AddBookComponent } from './components/add-book/add-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {FlexLayoutModule } from '@angular/flex-layout';
import {AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import{AngularFireAuth} from '@angular/fire/auth';
import{AgmCoreModule} from '@agm/core';

import { from } from 'rxjs';
//FIREBASE CONFIGURACION 
export const firebaseConfig =environment.firebaseConfig;

import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import{AngularFirestore}from '@angular/fire/firestore';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ListcookiesComponent } from './components/listcookies/listcookies.component';
import { DetailsCookieComponent } from './components/details-cookie/details-cookie.component';
import { AddcookieComponent } from './components/addcookie/addcookie.component';
import { AddworkersComponent } from './workers/addworkers/addworkers.component';
import { AdddisComponent } from './distribuidores/adddis/adddis.component';
import { ListworkersComponent } from './workers/listworkers/listworkers.component';
import { ListdistribuidoresComponent } from './distribuidores/listdistribuidores/listdistribuidores.component';
import { AsignardistComponent } from './workers/asignardist/asignardist.component';
import { ListcontactsComponent } from './contacts/listcontacts/listcontacts.component';

import { UploadworkersComponent } from './workers/uploadworkers/uploadworkers.component';
import { UploadbookComponent } from './components/uploadbook/uploadbook.component';
import { ActualizarComponent } from './distribuidores/actualizar/actualizar.component';

const MaterialComponents = [
  MatButtonModule
];


@NgModule({
  declarations: [
    AppComponent,
    ListcookiesComponent,
    AsignardistComponent,
    ProfileComponent,
    HeaderComponent,
    AddworkersComponent,
    UserComponent,
    AddcookieComponent,
    DetailsCookieComponent,
    FooterComponent,
    AddBookComponent,
    NavbarComponent,
    HomeComponent,
    GoogleMapComponent,
    DetailsBookComponent,
    UploadworkersComponent,
    LoginComponent,
    ListcontactsComponent,
    AdddisComponent,
    UploadbookComponent,
    ActualizarComponent,
    ListworkersComponent,
    ListdistribuidoresComponent,
    NavTabsComponent,
    AboutusComponent,
  
    ContactoComponent
    
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
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDmPQrfklKHKfqwIOuQZ92Q7G0TW0AYZG8'
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
