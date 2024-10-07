import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { porRegion } from '../../interfaces/porRegion';
import { porPais } from '../../interfaces/porPais';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrl: './por-region.component.css'
})
export class PorRegionComponent {
regiones:string[] = ['europe','africa','america','oceania','asia']
regionActiva:string = '';
paises:porPais[] = []

constructor(private _api:PaisService){}

activarRegion(region:string){
  this.regionActiva = region;
  this._api.getPorRegion(region).subscribe(data => {
    this.paises = data;
  })
}

}
