import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      calleAlfabetico: ['', Validators.required],
      calleNumerico: ['', Validators.required],
      ciudad: ['', Validators.required],
      formaPago: ['', Validators.required],
      monto: [''],
      numeroTarjeta: [''],
      nombreApellidoTitular: [''],
      fechaVencimiento: [''],
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
