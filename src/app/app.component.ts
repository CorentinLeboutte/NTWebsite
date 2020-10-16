import { Utilisateur } from './models/utilisateur.model';
import { AuthentificationService } from './services/authentification.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NTWebsite';
  public get isAuth(): boolean { return localStorage['user'] != undefined; }

  user: Utilisateur;

  constructor(private _router: Router, private _authentificationService: AuthentificationService) { this._authentificationService.user$.subscribe((x) => (this.user = x)) }



  public loginButtonAction() {
    localStorage.setItem('returnUrl', this._router.url);
    console.log(localStorage["returnUrl"])
    this._router.navigateByUrl("/connection");
  }

  public logoutButtonAction() {
    localStorage.removeItem('user');
    this._router.navigate(['/connection']);

  }



}

