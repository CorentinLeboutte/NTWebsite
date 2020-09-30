import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items: MatMenuModule[];

  constructor() { }

  ngOnInit(): void {
    this.items= [
      {title: 'Accueil', icon:'home', children:[
        {link:'/visites',title: 'Visites'},
        {link:'/gastronomie',title: 'Gastronomie'},
        {link:'/divertissement',title: 'Divertissement'},
      ]},
      {link:'/about',title: 'A propos', icon:'supervised_user_circle'},
      {link:'/contact',title: 'Contact', icon:'contact_page'},
      {link:'/connection',title: 'Se connecter', icon:'login'},

    ]
  }

}
