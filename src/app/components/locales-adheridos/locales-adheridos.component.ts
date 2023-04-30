import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locales-adheridos',
  templateUrl: './locales-adheridos.component.html',
  styleUrls: ['./locales-adheridos.component.css']
})
export class LocalesAdheridosComponent implements OnInit {

  locales = [
    {
      nombre: 'Local 1',
      descripcion: 'Descripción del local 1',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+1'
    },
    {
      nombre: 'Local 2',
      descripcion: 'Descripción del local 2',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+2'
    },
    {
      nombre: 'Local 3',
      descripcion: 'Descripción del local 3',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+3'
    },
    {
      nombre: 'Local 4',
      descripcion: 'Descripción del local 4',
      imagen: 'https://via.placeholder.com/300x200.png?text=Local+4'
    },
  ];

  realizarPedido(local) {
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
