import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfiguracionesComponent } from './components/configuraciones/configuraciones.component';

import { AddBookComponent } from './components/add-book/add-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NavTabsComponent } from './components/nav-tabs/nav-tabs.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
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

const routes: Routes=[
  {path: '', redirectTo: '/aboutus', pathMatch:'full'},
  {path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard]},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'workers', component: AddworkersComponent},

  {path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
  //CAN ACTIVATE SIRVE PARA BLOQUEAR FRAMES
  //ADMIN
  {path: 'configuraciones', component: ConfiguracionesComponent,canActivate: [AuthGuard]},
  {path: 'addbook', component: AddBookComponent,canActivate: [AuthGuard]},
  {path: 'dist', component: ListdistribuidoresComponent,canActivate: [AuthGuard]},

  {path: 'navbar', component: NavbarComponent},
  {path: 'list', component: ListworkersComponent},

  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'profile', component: ProfileComponent },
  {path: 'google', component: GoogleMapComponent,canActivate: [AuthGuard] },
  {path: 'cookies', component: ListcookiesComponent },
  {path: 'galleta/:id', component: DetailsCookieComponent },
  {path: 'add', component: AddcookieComponent },
  {path: 'distribuidores', component: AdddisComponent },

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
