import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [
  ]
})
export class TemplateComponent implements OnInit {

  persona = {
    nombre: ''
  };

  paises: any[] = [];

  constructor( private servicePais: PaisService ) { }

  ngOnInit(): void {

    this.servicePais.getPaises()
      .subscribe( paises => {
        console.log(paises);
        this.paises = paises;
        this.paises.unshift({
          nombre: 'Selecciona un País',
          codigo: ''
        });
      } );
  }
}
