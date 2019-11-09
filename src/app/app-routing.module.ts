import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { AddBookComponent } from './components/add-book/add-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import{AuthGuard}from'./guards/auth.guard';
import { from } from 'rxjs';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { ContactoComponent} from './components/contacto/contacto.component';
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

const routes: Routes=[
  {path: '', redirectTo: '/aboutus', pathMatch:'full'},
  {path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard]},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'workers', component: AddworkersComponent},
  {path: 'contactos', component: ListcontactsComponent,canActivate: [AuthGuard]},

  {path: 'home', component: HomeComponent,canActivate: [AuthGuard] },
  //CAN ACTIVATE SIRVE PARA BLOQUEAR FRAMES
  //ADMIN
  {path: 'addbook', component: AddBookComponent,canActivate: [AuthGuard]},
  {path: 'dist', component: ListdistribuidoresComponent,canActivate: [AuthGuard]},
  {path: 'uploadw', component: UploadworkersComponent,canActivate: [AuthGuard]},

  {path: 'navbar', component: NavbarComponent},
  {path: 'list', component: ListworkersComponent,canActivate: [AuthGuard]},
  {path: 'asignar', component: AsignardistComponent,canActivate: [AuthGuard]},
  {path: 'uploadbook', component: UploadbookComponent,canActivate: [AuthGuard]},
  {path: 'actualizar', component: ActualizarComponent,canActivate: [AuthGuard]},

  {path: 'login', component: LoginComponent},

  {path: 'profile', component: ProfileComponent },
  {path: 'google', component: GoogleMapComponent,canActivate: [AuthGuard] },
  {path: 'cookies', component: ListcookiesComponent ,canActivate: [AuthGuard]},
  {path: 'galleta/:id', component: DetailsCookieComponent,canActivate: [AuthGuard] },
  {path: 'add', component: AddcookieComponent,canActivate: [AuthGuard] },
  {path: 'distribuidores', component: AdddisComponent ,canActivate: [AuthGuard]},

  {path: 'book/:id', component: DetailsBookComponent },
  
  {path: 'contacto', component: ContactoComponent, canActivate:[AuthGuard]},

  {path: 'bar', component: NavTabsComponent},

  {path: '**', redirectTo: '/aboutus', pathMatch:'full'},

]


@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
