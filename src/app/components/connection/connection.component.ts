import { Utilisateur } from './../../models/utilisateur.model';
import { login } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthentificationService } from '../../services/authentification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  returnUrl: string;

  authStatus: boolean;

  constructor(
    private _dateAdapter: DateAdapter<any>,
    private _Auth: AuthentificationService,
    private _formBuillder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    if (this._Auth.userValue) {
      this._router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    this._dateAdapter.setLocale('fr');
    this.initForm();

    this.authStatus = this._Auth.isAuth;

    this.loginForm = this._formBuillder.group({
      email: [null, [Validators.required, Validators.email]],
      mdp: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(50)]]
    });

    this.registerForm = this._formBuillder.group({
      civilite: [null, [Validators.required]],
      nom: [null, [Validators.required]],
      prenom: [null, [Validators.required]],
      dateNaiss: [null, [Validators.required]],
      numTelDomicile: [null, [Validators.required]],
      numTelPortable: [null, [Validators.required]],
      numFax: [null, [Validators.required]],
      email: [null, [Validators.required]],
      mdp: [null, [Validators.required]]
    });

    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/divertissement';
  }



  // login(){
  //   this._Auth.login();
  //   ().then(
  //     () => {
  //       this.authStatus = this._Auth.isAuth;
  //     }
  //   ).catch((error) => {console.log(error)})
  // }



  logout() {
    this._Auth.signOut();
    this.authStatus = this._Auth.isAuth;
  }

  get f() { return this.loginForm.controls; }

  onSubmitLogin() {
    const formLogin = new login;
    formLogin.email = this.f.email.value;
    formLogin.mdp = this.f.mdp.value;
    this._Auth.login(formLogin).subscribe(
      data => {
        this._router.navigate([this.returnUrl]);
      },
      error => {
        console.log(error);
      }
    );
  }

  onSubmitRegister() {
    const formRegister = new Utilisateur;
    formRegister.civilite = this.f.civilite.value;
    formRegister.nom = this.f.nom.value;
    formRegister.prenom = this.f.prenom.value;
    formRegister.dateNaiss = this.f.dateNaiss.value;
    formRegister.numTelDomicile = this.f.email.value;
    formRegister.numTelPortable = this.f.numTelPortable.value;
    formRegister.numFax = this.f.numFax.value;
    formRegister.email = this.f.email.value;
    formRegister.mdp = this.f.mdp.value;
    this._Auth.login(formRegister).subscribe(
      data => {
        this._router.navigate([this.returnUrl]);
      },
      error => {
        console.log(error);
      }
    );

  }

  private initForm() {
    if (this._Auth.user$)
      return 'Okey';
    else
      return 'NotOkey';



  }
  public onClick(event): void {
    console.log(event);
  }

}
