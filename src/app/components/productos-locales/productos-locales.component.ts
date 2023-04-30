import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productos-locales',
  templateUrl: './productos-locales.component.html',
  styleUrls: ['./productos-locales.component.css']
})
export class ProductosLocalesComponent implements OnInit {

  @Input()
  nombre = 'DesarrolloWeb.com';

  constructor() { }

  ngOnInit(): void {
  }

}
