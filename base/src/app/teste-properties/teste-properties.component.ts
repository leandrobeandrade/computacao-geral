import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-teste-properties',
  templateUrl: './teste-properties.component.html',
  styleUrls: ['./teste-properties.component.scss']
})
export class TestePropertiesComponent implements OnInit {

  @Input() nome: string;

  constructor() { }

  ngOnInit() {
  }

}
