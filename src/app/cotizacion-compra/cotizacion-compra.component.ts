import { Component, OnInit, Input, Output } from '@angular/core';
import { ICotizacion } from '../iCotizacion';
import { IReporte } from '../iReporte';
import {CotizacionService} from '../cotizacion.service';

@Component({
  selector: 'app-cotizacion-compra',
  templateUrl: './cotizacion-compra.component.html',
  styleUrls: ['./cotizacion-compra.component.css']
})
export class CotizacionCompraComponent implements OnInit {


 public cotizacion = { name: "", id: 0, padre:0 }

 cotizaciones: ICotizacion[] = [];

 selectedCotizacion?: ICotizacion;

 @Input() reporte!: IReporte;

  constructor( public datosCotizaciones:CotizacionService)
  {

  }

  ngOnInit(): void {

    this.datosCotizaciones.getCotizaciones(this.reporte.id).subscribe((data: any[])=>{
      console.log(data);
      this.cotizaciones = data;
    })



  }


  onSelect(cotizacion: ICotizacion): void {
    this.selectedCotizacion = cotizacion;
  }

  agregar(name: string, id:string): void {
    name = name.trim();

    var newCotizacion = <ICotizacion>{};
    newCotizacion.id=id;
    newCotizacion.name=name;




    if (!name) { return; }
    this.datosCotizaciones.agregaCotizacion(newCotizacion)
      .subscribe(cotizacion => {
        this.cotizaciones.push(cotizacion);
      });
  }

}
