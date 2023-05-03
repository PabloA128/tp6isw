import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locales-adheridos',
  templateUrl: './locales-adheridos.component.html',
  styleUrls: ['./locales-adheridos.component.css']
})
export class LocalesAdheridosComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  realizarPedido(id) {
    switch (id) {
      case 1:
        id = 1;
        this.router.navigate(['/productos', id]);
        break;
      case 2:
        id = 2;
        this.router.navigate(['/productos', id]);
        break;
      case 3:
        id = 3;
        this.router.navigate(['/productos', id]);

        break;
      default:
        break;
    }
  }
    
}


