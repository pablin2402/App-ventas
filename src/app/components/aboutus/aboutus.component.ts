import { Component, OnInit } from '@angular/core';

import { fallIn, moveIn } from './router.animation';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  animations:[moveIn(),fallIn()],
  host: {'[@moveIn': ''}
})

export class AboutusComponent implements OnInit
{

  //books: AngularFireList<any[]>;
  allBooks: any;
  state: string = '';

  ngOnInit()
  {

  }

}
