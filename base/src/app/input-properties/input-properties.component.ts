import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.scss']
})
export class InputPropertiesComponent implements OnInit {

  nomeCurso: string = 'Este texto está vindo através de outro componente!';

  valorInicial: number = 0;

  mudandoValor(evento: any) {
    console.log(evento.novoValor)
  }

  constructor() { }

  ngOnInit() {
  }

}
