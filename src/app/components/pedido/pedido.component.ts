import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
const fechaRegex = /^\d{2}\/\d{2}\/\d{4}$/;

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  myForm: FormGroup;
  formaPago:string;
  ciudades: string[] = ['Córdoba', 'Villa Carlos Paz', 'Río Cuarto', 'Alta Gracia', 'La Falda'];

  constructor(private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      calle: ['', Validators.required],
      altura: ['', Validators.required],
      ciudad: ['', Validators.required],
      referencia:[''],
      formaPago: ['', Validators.required],
      monto: [''],
      numeroTarjeta: ['',Validators.pattern('^4[0-9]{12}(?:[0-9]{3})?$')],
      nombreApellidoTitular: [''],
      cvc:['', Validators.pattern('^[0-9]{3,4}$')],
      fechaVencimiento: ['', Validators.pattern(/^(0[1-9]|1[0-2])\/[0-9]{2}$/)],
      entrega: ['', Validators.required],
      fechaEntrega: ['']
    });
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log(this.myForm.value);
  }

  onFormaPagoChange() {
    const formaPagoControl = this.myForm.get('formaPago');
  
    if (formaPagoControl.value === 'efectivo') {
      this.formaPago = 'efectivo';
    } else if (formaPagoControl.value === 'tarjeta') {
      this.formaPago = 'tarjeta';
    }
  }
}
