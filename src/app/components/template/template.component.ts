import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html'
  // styles: [
  //   `
  //     .ng-invalid.ng-touched:not(form) {
  //       border: 1px solid red;
  //     }
  //   `
  // ]
})
export class TemplateComponent implements OnInit {
  usuario: Object = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: 'Hombre',
    acepta: false
  };
  paises = [
    {
      codigo: 'CL',
      nombre: 'CHILE'
    },
    {
      codigo: 'AR',
      nombre: 'ARGENTINA'
    }
  ];
  sexos = ['Hombre', 'Mujer'];
  constructor() {}
  nombre: string;
  ngOnInit() {}
  guardar(forma: NgForm) {
    // console.log('Formulario Guardado');
    console.log('ngForm', forma);
    console.log('Valor Forma', forma.value);
    console.log('usuario', this.usuario);
  }
}
