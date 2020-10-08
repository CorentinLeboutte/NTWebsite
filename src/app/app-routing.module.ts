import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { ContactComponent } from './components/contact/contact.component';
import { ActiludiqueComponent } from './components/divertissement/actiludique/actiludique.component';
import { ActisportComponent } from './components/divertissement/actisport/actisport.component';
import { CinemaComponent } from './components/divertissement/cinema/cinema.component';
import { DivertissementComponent } from './components/divertissement/divertissement.component';
import { NightlifeComponent } from './components/divertissement/nightlife/nightlife.component';
import { EchoppeslocalesComponent } from './components/gastronomie/echoppeslocales/echoppeslocales.component';
import { FermesComponent } from './components/gastronomie/fermes/fermes.component';
import { GastronomieComponent } from './components/gastronomie/gastronomie.component';
import { RestoephemereComponent } from './components/gastronomie/restoephemere/restoephemere.component';
import { RestopermComponent } from './components/gastronomie/restoperm/restoperm.component';
import { HomeComponent } from './components/home/home.component';
import { InsoliteComponent } from './components/visites/insolite/insolite.component';
import { MonumentsComponent } from './components/visites/monuments/monuments.component';
import { MuseeComponent } from './components/visites/musee/musee.component';
import { PointdevueComponent } from './components/visites/pointdevue/pointdevue.component';
import { VisitesComponent } from './components/visites/visites.component';


const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'accueil', component: AccueilComponent},

  { path:'visites', component: VisitesComponent, children:[]},
  { path:'insolite', component: InsoliteComponent, children:[]},
  { path:'monuments', component: MonumentsComponent, children:[]},
  { path:'pointdevue', component: PointdevueComponent, children:[]},
  { path:'musee', component: MuseeComponent, children:[]},

  { path:'gastronomie', component: GastronomieComponent, children:[]},
  { path:'echoppeslocales', component: EchoppeslocalesComponent, children:[]},
  { path:'fermes', component: FermesComponent, children:[]},
  { path:'restoephemere', component: RestoephemereComponent, children:[]},
  { path:'restoperm', component: RestopermComponent, children:[]},

  /*{ path:'divertissement', component: DivertissementComponent, children:[]},  */
  { path:'divertissement/:cat', component: DivertissementComponent, children:[]},
  { path:'actiludique', component: ActiludiqueComponent, children:[]},
  { path:'actisport', component: ActisportComponent, children:[]},
  { path:'cinema', component: CinemaComponent, children:[]},
  { path:'nightlife', component: NightlifeComponent, children:[]},

  { path:'about', component: AboutComponent, children:[]},
  { path:'contact', component: ContactComponent, children:[]},
  { path:'connection', component: ConnectionComponent, children:[]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
