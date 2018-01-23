import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router } from '@angular/router';
import {Plato} from "../plato/plato.component";

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {
  platos: Plato[];
  
  constructor(private db: FirebaseService, private router: Router) { }


  ngOnInit() {
   this.getListaPlatos();
  }

  getListaPlatos(): void {
    this.db.getListaPlatos().subscribe(platos => {
      this.platos = platos;
      console.log(platos)
    })
  }

}
