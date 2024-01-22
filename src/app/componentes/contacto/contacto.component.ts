import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent{
  formularioContacto: FormGroup;


  // Aquí puedes inicializar tu formulario
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formularioContacto = this.formBuilder.group({
      name:"",
      addres:"",
      telefono:"",
    })
  }


  // Esta función se ejecutará cuando el formulario se envíe
  formSubmit() {
    console.log(this.formularioContacto.value)
  }
}

