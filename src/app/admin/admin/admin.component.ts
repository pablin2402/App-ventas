import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public auth: AuthService
  )
  {

  }

  ngOnInit() {
  }

}
