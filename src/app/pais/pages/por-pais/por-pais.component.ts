import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { porPais } from '../../interfaces/porPais';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrl: './por-pais.component.css'
})
export class PorPaisComponent {
termino:string = '';
alert:boolean = false;
paises:porPais[] = [];
paisesSugerencia:porPais[] = []
placeholder:string ='Busqueda por pais....'
constructor(private _pais:PaisService){}

buscar(termino:string){
  this.termino = termino;
  this.paisesSugerencia = []
  this._pais.getBuscarPais(termino).subscribe(data => {
    this.alert = false
    this.paises = data
    console.log(this.paises)
  }, (error) => {
    this.alert = true;
    this.paises = []
    console.log(error)
  })
}

sugerencias(termino:string){
  this.alert = false;
  this.paisesSugerencia = []
  this._pais.getBuscarPais(termino).subscribe(resp => {
    this.paisesSugerencia = resp.splice(0,10) ;
  })
}
}
