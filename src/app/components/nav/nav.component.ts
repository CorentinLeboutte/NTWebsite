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
        {link:'/visites',title: 'Visites', children:[
          {link:'/musee',title: 'Musées'},
          {link:'/pointdevue',title: 'Points de vue'},
          {link:'/insolite',title: 'Insolite'},
          {link:'/monuments',title: 'Monuments'},
        ]},
        {link:'/gastronomie',title: 'Gastronomie', children:[
          {link:'/restoperm',title: 'Restaurants permanents'},
          {link:'/restoephemere',title: 'Restaurants éphemères'},
          {link:'/echoppeslocales',title: 'Echoppes locales'},
          {link:'/fermes',title: 'Fermes'},
        ]},
        {link:'/divertissement',title: 'Divertissement', children:[
          {link:'/cinema',title: 'Cinémas'},
          {link:'/actiludique',title: 'Activités ludiques'},
          {link:'/actisport',title: 'Activités sportives'},
          {link:'/nightlife',title: 'Night Life'},
        ]},
        
      ]},
      {link:'/about',title: 'A propos', icon:'supervised_user_circle'},
      {link:'/contact',title: 'Contact', icon:'contact_page'},
      {link:'/connection',title: 'Se connecter', icon:'login'},

    ]
  }

}
