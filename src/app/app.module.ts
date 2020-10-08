import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { NavComponent } from './components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {LayoutModule} from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { VisitesComponent } from './components/visites/visites.component';
import { GastronomieComponent } from './components/gastronomie/gastronomie.component';
import { DivertissementComponent } from './components/divertissement/divertissement.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import { PointdevueComponent } from './components/visites/pointdevue/pointdevue.component';
import { InsoliteComponent } from './components/visites/insolite/insolite.component';
import { MonumentsComponent } from './components/visites/monuments/monuments.component';
import { RestopermComponent } from './components/gastronomie/restoperm/restoperm.component';
import { RestoephemereComponent } from './components/gastronomie/restoephemere/restoephemere.component';
import { EchoppeslocalesComponent } from './components/gastronomie/echoppeslocales/echoppeslocales.component';
import { FermesComponent } from './components/gastronomie/fermes/fermes.component';
import { CinemaComponent } from './components/divertissement/cinema/cinema.component';
import { ActiludiqueComponent } from './components/divertissement/actiludique/actiludique.component';
import { ActisportComponent } from './components/divertissement/actisport/actisport.component';
import { NightlifeComponent } from './components/divertissement/nightlife/nightlife.component';
import { MuseeComponent } from './components/visites/musee/musee.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AccueilComponent } from './components/accueil/accueil.component';
import {TextFieldModule} from '@angular/cdk/text-field';
import { AdressFormComponent } from './adress-form/adress-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClient, HttpClientModule } from '@angular/common/http';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ConnectionComponent,
    NavComponent,
    VisitesComponent,
    GastronomieComponent,
    DivertissementComponent,
    PointdevueComponent,
    InsoliteComponent,
    MonumentsComponent,
    RestopermComponent,
    RestoephemereComponent,
    EchoppeslocalesComponent,
    FermesComponent,
    CinemaComponent,
    ActiludiqueComponent,
    ActisportComponent,
    NightlifeComponent,
    MuseeComponent,
    AccueilComponent,
    AdressFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatTableModule,
    MatSlideToggleModule,
    LayoutModule,
    MatGridListModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatSelectModule,
    DragDropModule,
    TextFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    HttpClientModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
