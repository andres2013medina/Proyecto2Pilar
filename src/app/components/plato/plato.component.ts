import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {

  @Input() plato: Plato;
  
    constructor(private db: FirebaseService,
      private router: Router,
      private route: ActivatedRoute,
      private location: Location) { }

  ngOnInit() {
    this.getInfoPlato();
  }

  getInfoPlato(): void {
    this.db.getInfoPlato(this.route.snapshot.paramMap.get('id')).subscribe(plato => {
      this.plato = plato;
      console.log(plato)
    })
  }

}

export class Plato{
  nombre?: String;
  pais?: String;
  foto?:String;
  carbohidratos?:number;
  grasa?:number;
  proteina?:number;
  dificultad?:number;
  ingrediente?:String;
  preparacion?:String;

}