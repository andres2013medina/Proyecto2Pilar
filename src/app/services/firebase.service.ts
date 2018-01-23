import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/*import { lista } from "../components/lista/lista.component";
import { Comenntario } from "../components/Plato/Plato.component";*/
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase';
import {Plato} from "../components/plato/plato.component";




@Injectable()
export class FirebaseService {

  userId: string;
  userName: string;

  constructor(
    private db: AngularFireDatabase, 
    private afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute) 
    {

    this.afAuth.authState.subscribe(user => {
      if (user) this.userId = user.uid;
      if (user) this.userName = user.displayName;
      console.log(this.userId)
    })
  }
  
  getInfoPlato(id: string): Observable<Plato> {
    if (!this.userId) return;
    return this.db.object(`/platos/` + id);
  }

  getListaPlatos(): FirebaseListObservable<Plato[]> {
    if (!this.userId) return;
    return this.db.list(`platos`)
  }

 
  AgregarPlato(nombre, pais,proteina,carbohidratos,grasa,dificultad,ingrediente,preparacion,foto, platoId): void {
    var PlatoData = {
      nombre:nombre,
      pais:pais,
      proteina:proteina,
      carbohidratos:carbohidratos,
      grasa:grasa,
      dificultad:dificultad,
      ingrediente:ingrediente,
      preparacion:preparacion,
      foto:foto,
    }

    var Creador={
    userId: this.userId,
    userName: this.userName
    }


    var newKey = firebase.database().ref().child('platos').push().key; 
    var newKey2 = firebase.database().ref().child('/users/' + platoId + '/platos').push().key;
    this.db.object('/platos/' + newKey).update(PlatoData); 
    this.db.object('/platos/'+ newKey + '/Creado/').update(Creador);
    this.db.object('/users/' + this.userId + '/platos/' + newKey2).set(newKey); 
    var plato;
    this.getInfoPlato(platoId).subscribe(plat => { plato = plat });
  }



 



}