import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productos-locales',
  templateUrl: './productos-locales.component.html',
  styleUrls: ['./productos-locales.component.css']
})
export class ProductosLocalesComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  //Contadores
  contador1: number = 0;
  contador2: number = 0;
  contador3: number = 0;
  precioArabes: number = 110;
  precioCarneSuave: number = 100;
  precioJamonYQueso: number = 90;
  subtotal1: number = this.contador1*120;
  subtotal2: number = this.contador2*110;
  subtotal3: number = this.contador3*100;
  total: number = 0;
  cambiarContador(contador: number, incremento: number) {
    switch (contador) {
      case 1:
        if (this.contador1+incremento >= 0)
        {this.contador1 += incremento;
        this.subtotal1 = this.contador1*this.precioArabes;
        this.total = this.subtotal1 + this.subtotal2 + this.subtotal3;
      };
        
        break;
      case 2:
        if (this.contador2+incremento >= 0)
        {this.contador2 += incremento;
        this.subtotal2 = this.contador2*this.precioCarneSuave;
        this.total = this.subtotal1 + this.subtotal2 + this.subtotal3;
      };
        break;
      case 3:
        if (this.contador3+incremento >= 0)
        {this.contador3 += incremento;
        this.subtotal3 = this.contador3*this.precioJamonYQueso;
        this.total = this.subtotal1 + this.subtotal2 + this.subtotal3;
        };
        break;
      default:
        break;
    }
  }
}
