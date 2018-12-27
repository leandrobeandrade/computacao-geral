import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.scss']
})
export class OutputPropertiesComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudarValor: any = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: HTMLElement;

  incrementa() {
    console.log(this.campoValorInput);
    this.valor++;
    this.mudarValor.emit({
      novoValor: this.valor
    });
  }

  decrementa() {
    this.valor--;
    this.mudarValor.emit({
      novoValor: this.valor
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
