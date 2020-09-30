import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { ContactComponent } from './components/contact/contact.component';
import { DivertissementComponent } from './components/divertissement/divertissement.component';
import { GastronomieComponent } from './components/gastronomie/gastronomie.component';
import { HomeComponent } from './components/home/home.component';
import { VisitesComponent } from './components/visites/visites.component';


const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'visites', component: VisitesComponent, children:[]},
  { path:'gastronomie', component: GastronomieComponent, children:[]},
  { path:'divertissement', component: DivertissementComponent, children:[]},
  { path:'about', component: AboutComponent, children:[]},
  { path:'contact', component: ContactComponent, children:[]},
  { path:'connection', component: ConnectionComponent, children:[]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
