import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';



import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AuthService  } from "./services/auth.service";
import { FirebaseService } from "./services/firebase.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlatoComponent } from './components/plato/plato.component';
import { PlatosComponent } from './components/platos/platos.component';
import { AddPlatoComponent } from './components/add-plato/add-plato.component';
import { PerfilComponent } from './components/perfil/perfil.component';





const appRoutes: Routes=[
  {path: 'plato/:id' , component:PlatoComponent},
  {path: 'platos' , component:PlatosComponent},
  {path: 'perfil' , component:PerfilComponent},
  {path:'add-plato',component:AddPlatoComponent},
  {path:'',component:HomeComponent},
]


   

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PlatoComponent,
    PlatosComponent,
    AddPlatoComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [AuthService,FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
