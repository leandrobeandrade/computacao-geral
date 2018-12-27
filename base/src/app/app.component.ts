import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nomePortal: string;
  cursos: string[] = ['Javascript', 'Typescript', 'Ecmascript', 'Angular', 'Ionic'];
  evt: string;
  salvo: string;
  mouseSobre: boolean = false;
  nome: string = 'abc';

  constructor() {
    this.nomePortal = 'http://loiane.training';
  }

  clicado() {
    alert('Botão clicado!!');
  }

  onKeyUp(evento: KeyboardEvent) {
    this.evt = (<HTMLInputElement>evento.target).value;
  }

  // OU

  /*
  onKeyUp(evento) {
    this.evt = evento.target.value;
  }
   */

  salvarValor(val: string) {
    this.salvo = val;
  }

  sobreMouse() {
    this.mouseSobre = !this.mouseSobre;
  }

}
