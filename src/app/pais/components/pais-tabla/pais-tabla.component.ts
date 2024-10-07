import { Component, Input } from '@angular/core';
import { porPais } from '../../interfaces/porPais';
import { porCapital } from '../../interfaces/porCapital';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrl: './pais-tabla.component.css'
})
export class PaisTablaComponent {
@Input() paises:porPais[] = [];

constructor(){}
}
