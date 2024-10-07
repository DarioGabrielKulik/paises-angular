import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrl: './pais-input.component.css'
})
export class PaisInputComponent implements OnInit {
  @Output() enter   :EventEmitter<string> = new EventEmitter();
  @Output() debounce:EventEmitter<string> = new EventEmitter();
  @Input() busqueda:string = '';
  termino:string = '';
  deBouncer: Subject<string> = new Subject();
  
  ngOnInit(){
    this.deBouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.debounce.emit(valor)
    })

  }

  buscar(){
 
    this.enter.emit(this.termino);
  }

  teclaPrecionada(){
    // const valor = event.target.value
    // console.log(valor)
    this.deBouncer.next(this.termino)
  }
}
