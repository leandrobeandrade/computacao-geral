import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  info: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99
  }

  livros: string[] = ['Angular', 'Ecmascript', 'Javascript'];

  filtros: string;

  addCurso(valor: any){
    this.livros.push(valor);
    document.getElementsByTagName('input')[0].value = '';
  }

  valorAsync = new Promise((resolve) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  //valorAsync2 = Observable.interval(2000).map(valor => 'Valor assíncrono 2'); <error>

  constructor() { }

  ngOnInit() {
  }

}
