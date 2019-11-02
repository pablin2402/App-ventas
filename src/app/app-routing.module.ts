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
import { AuthGuard } from './guards/auth.guard';
import { from } from 'rxjs';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { ContactoComponent } from './components/contacto/contacto.component';

import { CompraComponent } from './components/compra/compra.component';
import { CarritoNuevoComponent } from './components/carrito-nuevo/carrito-nuevo.component';


import { ListcookiesComponent } from './components/listcookies/listcookies.component';
import { DetailsCookieComponent } from './components/details-cookie/details-cookie.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'aboutus', component: AboutusComponent, canActivate: [AuthGuard] },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent},
  //CAN ACTIVATE SIRVE PARA BLOQUEAR FRAMES
  //ADMIN
  { path: 'configuraciones', component: ConfiguracionesComponent, canActivate: [AuthGuard] },
  { path: 'addbook', component: AddBookComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'google', component: GoogleMapComponent },
  { path: 'cookies', component: ListcookiesComponent },
  { path: 'galleta/:id', component: DetailsCookieComponent },
  { path: 'book/:id', component: DetailsBookComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'comprar', component: CompraComponent },
  { path: 'carritoNuevo', component: CarritoNuevoComponent, canActivate: [AuthGuard] },
  { path: 'contacto', component: ContactoComponent, canActivate: [AuthGuard] },


  {path: 'cookies', component: ListcookiesComponent },
  {path: 'galleta/:id', component: DetailsCookieComponent },

  {path: 'book/:id', component: DetailsBookComponent },

  {path: 'contacto', component: ContactoComponent},
  {path: 'comprar', component: CompraComponent, canActivate: [AuthGuard]},
  {path: 'carritoNuevo', component: CarritoNuevoComponent, canActivate: [AuthGuard]},
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
  declarations: []
})
export class AppRoutingModule { }
