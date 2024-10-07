import { Component, Input } from '@angular/core';
import { porCapital } from '../../interfaces/porCapital';

@Component({
  selector: 'app-capital-tabla',
  templateUrl: './capital-tabla.component.html',
  styleUrl: './capital-tabla.component.css'
})
export class CapitalTablaComponent {
  @Input() capital:porCapital[] = [];
}
