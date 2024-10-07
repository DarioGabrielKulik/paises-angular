import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { porPais } from '../../interfaces/porPais';
import { switchMap } from 'rxjs';
import { verPais } from '../../interfaces/verPais';




@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrl: './ver-pais.component.css'
})
export class VerPaisComponent implements OnInit{
  pais:verPais[]=[];

  constructor(private _aRouter:ActivatedRoute, private _api:PaisService){

  }

  ngOnInit(){

    this._aRouter.params
    .pipe( switchMap( ({id}) => this._api.getPorId(id)) )    
    .subscribe((data) => {
      this.pais = data;
      console.log(this.pais)});
   
    // this._aRouter.params
    // .subscribe( ({id}) => {
    //   this._api.getPorId(id).subscribe(data => {
    //     this.pais = data;
    //     console.log(this.pais)
    //   })    
    // } )
  }

  
}
