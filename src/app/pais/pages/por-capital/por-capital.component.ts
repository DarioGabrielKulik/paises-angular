import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { porCapital } from '../../interfaces/porCapital';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrl: './por-capital.component.css'
})
export class PorCapitalComponent {
placeholder:string='Busqueda por capital....'
termino:string = '';
alert:boolean = false;
capital:porCapital[] = [];
constructor(private _pais:PaisService){}

buscar(termino:string){
  this.termino = termino;
  this._pais.getBuscarCapital(termino).subscribe(data => {
    this.alert = false
    this.capital = data

    console.log(this.capital)
  }, (error) => {
    this.alert = true;
    this.capital= []
    console.log(error)
  })
}


}
