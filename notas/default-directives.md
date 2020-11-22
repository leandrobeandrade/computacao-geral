# Diretivas Padrão

> import { CommonModule } from '@angular/common';

#### Remove ou recria uma parte da árvore DOM com base na expressão showSection.
    
    <section *ngIf="showSection">	

#### Transforma o elemento li e seu conteúdo em um modelo e usa isso para instanciar uma visualização para cada item na lista.

    <li *ngFor="let item of list">	

#### Troca condicionalmente o conteúdo do div selecionando um dos modelos incorporados com base no valor atual de conditionExpression.
    
    <div [ngSwitch]="conditionExpression">
      <ng-template [ngSwitchCase]="case1Exp">...</ng-template>
      <ng-template ngSwitchCase="case2LiteralString">...</ng-template>
      <ng-template ngSwitchDefault>...</ng-template>
    </div>	

#### Vincula a presença de classes CSS no elemento à veracidade dos valores de mapa associados. A expressão à direita deve retornar o mapa {class-name: true / false}.

    <div [ngClass]="{'active': isActive, 'disabled': isDisabled}">	

#### Permite atribuir estilos a um elemento HTML usando CSS. Você pode usar CSS diretamente, como no primeiro exemplo, ou pode chamar um método do componente.

    <div [ngStyle]="{'property': 'value'}">
    <div [ngStyle]="dynamicStyles()">	
