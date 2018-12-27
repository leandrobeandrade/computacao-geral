import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  cursos: string[] = ['Typescript', 'Ecmascript', 'Javascript', 'Angular', 'Ionic'];

  favorito1: boolean = true;
  favorito2: boolean = true;

  ativo1: boolean = false;
  ativo2: boolean = false;
  tamanhoFonte: number = 20;

  content: string;

  teste: boolean = true;

  favoritar1() {
    this.favorito1 = !this.favorito1;
  }

  favoritar2() {
    this.favorito2 = !this.favorito2;
  }

  mudarEstilo1() {
    this.ativo1 = !this.ativo1;
  }

  mudarEstilo2() {
    this.ativo2 = !this.ativo2;
  }

  constructor() { }

  ngOnInit() {
  }

}
