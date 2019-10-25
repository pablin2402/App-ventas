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

const routes: Routes=[
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'configuraciones', component: ConfiguracionesComponent},
  {path: 'addbook', component: AddBookComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},

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
