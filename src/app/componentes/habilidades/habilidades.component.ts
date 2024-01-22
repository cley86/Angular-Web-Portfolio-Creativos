import {Component, OnInit} from '@angular/core';
import {data, datos} from "../../data/datos"

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.css'
})
export class HabilidadesComponent implements OnInit{

  habilidades: data[] = [];

  ngOnInit() {
    this.habilidades = datos
  }
  guardarData (habilidad:data){

   localStorage.setItem("habilidad", JSON.stringify(habilidad))
  }
}
