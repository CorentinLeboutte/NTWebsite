import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { login } from '../models/login';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public get isAuth(): boolean { return localStorage["user"] != undefined };
  private _userSubject: BehaviorSubject<Utilisateur>;
  public user$: Observable<Utilisateur>;

  // get user$(): Observable<User>{
  //   return this.myUserSubject.asObservable();
  // }

  constructor(
    private _client: HttpClient,
    private _router: Router
  ) {
    this._userSubject = new BehaviorSubject<Utilisateur>(JSON.parse(localStorage.getItem('user')));
    this.user$ = this._userSubject.asObservable();
  }

  public get userValue(): Utilisateur {
    return this._userSubject.value ?? undefined;
  }

  register(formUser: Utilisateur): Observable<any> {
    return this._client.post(`${environment.apiUrl}/utilisateur/create`, formUser);
  }

  login(formUser: login): Observable<Utilisateur> {
    return this._client.post<Utilisateur>(`${environment.apiUrl}/utilisateur/login`, formUser)
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this._userSubject.next(user);

        return user;
      }));



    // return new Promise(
    //   (resolve, reject) => {
    //     setTimeout(() => {
    //       this.isAuth=true;
    //       if(this.isAuth) resolve(console.log("Vous êtes connecté"));
    //       else reject(console.log('connection échouée'));
    //     }, 1000);
    //   }

  }

  UpdateUser(user: Utilisateur) {
    this._client.put<Utilisateur>('http://localhost:5000', user).pipe(map(user => {
      this._userSubject.next(user)
    }))
  }

  signOut() {
    this._userSubject.next(null);
    localStorage.removeItem('user');
    this._router.navigate(['/connection']);

    // this.isAuth = false;
  }
}
