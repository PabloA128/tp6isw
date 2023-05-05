import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-productos-locales',
  templateUrl: './productos-locales.component.html',
  styleUrls: ['./productos-locales.component.css']
})
export class ProductosLocalesComponent implements OnInit {

  id: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');    });
    
      
  }


  //Contadores
  contador1: number = 0;
  contador2: number = 0;
  contador3: number = 0;

  //Precios productos
  precioArabes: number = 200;
  precioCarneSuave: number = 250;
  precioJamonYQueso: number = 150;
  precioCheeseburger: number = 800;
  precioCangreburguer: number = 1500;
  precioLomito: number = 2000;
  precioMuzza: number = 1500;
  precioEspecial: number = 1800;
  precioMarinada: number = 1800;

  
  subtotal1: number = 0;
  subtotal2: number = 0;
  subtotal3: number = 0;
  total: number = 0;
  pedidoDenegado: boolean = false;


  confirmarPedido(){
    if(this.total > 0){
      this.router.navigate(['/pedido']);
    }
    else{
      this.pedidoDenegado = true;
    }
  }


  cambiarContador(contador: number, incremento: number) {
    switch (contador) {
      case 1:
        if (this.contador1+incremento >= 0)
        {
          this.contador1 += incremento;
          switch(this.id){
            case 1:
              this.subtotal1 = this.contador1*this.precioArabes;
              break;
            case 2:
              this.subtotal1 = this.contador1*this.precioCheeseburger;
              break;
            case 3:
              this.subtotal1 = this.contador1*this.precioMuzza;
              break;
          }
         this.total = this.subtotal1 + this.subtotal2 + this.subtotal3;
      };
        
        break;
      case 2:
        if (this.contador2+incremento >= 0)
        {this.contador2 += incremento;
          switch(this.id){
            case 1:
              this.subtotal2 = this.contador2*this.precioCarneSuave;
              break;
            case 2:
              this.subtotal2 = this.contador2*this.precioCangreburguer;
              break;
            case 3:
              this.subtotal2 = this.contador2*this.precioEspecial;
              break;
          }
        this.total = this.subtotal1 + this.subtotal2 + this.subtotal3;
      };
        break;
      case 3:
        if (this.contador3+incremento >= 0)
        {this.contador3 += incremento;
          switch(this.id){
            case 1:
              this.subtotal3 = this.contador3*this.precioJamonYQueso;
              break;
            case 2:
              this.subtotal3 = this.contador3*this.precioLomito;
              break;
            case 3:
              this.subtotal3 = this.contador3*this.precioMarinada;
              break;
          }
        this.total = this.subtotal1 + this.subtotal2 + this.subtotal3;
        };
        break;
      default:
        break;
    }
  }
}
