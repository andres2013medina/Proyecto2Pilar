import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Plato } from "../plato/plato.component";
import { FirebaseService } from "../../services/firebase.service";
import { AuthService } from "../../services/auth.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-plato',
  templateUrl: './add-plato.component.html',
  styleUrls: ['./add-plato.component.css']
})
export class AddPlatoComponent {

  constructor(private db: FirebaseService, 
    private afAuth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) { }
    submitted = false;
    model = new Plato();

    onSubmit() { 
    this.submitted = true;
    this.db.AgregarPlato(this.model.nombre,this.model.pais,Number(this.model.proteina),Number(this.model.carbohidratos),Number(this.model.grasa),Number(this.model.dificultad),this.model.ingrediente,this.model.preparacion,"https://firebasestorage.googleapis.com/v0/b/proyectobd2-50bf6.appspot.com/o/hongo.jpg?alt=media&token=30608c46-f346-409f-b0e2-f4ffb7871837",this.route.snapshot.paramMap.get('id'))
  }

}
