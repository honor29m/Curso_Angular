import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  public termino: string = '';
  public hayError: boolean = false;
  public paises: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  ngOnInit(): void {
  }

  buscar() {
    this.hayError = false;
    console.log(this.termino);

    this.paisService.burcarPais( this.termino ).subscribe(
      response => {
        console.log( response );
        this.paises = response;
      },
      error => {
        console.log(error);
        this.hayError = true;
      }
    )
  }

}
