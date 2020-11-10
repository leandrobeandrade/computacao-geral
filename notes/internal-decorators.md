# Decoradores de campo de classe para diretivas e componentes

> Decoradores importados do pacote **core** do Angular.

    import { Input, ... } from '@angular/core';
    
### @Input()
Declara uma propriedade de entrada que você pode atualizar por meio de vinculação de propriedade, ver exemplo completo [aqui](https://www.google.com):

    @Input() myProperty: string;

    <my-cmp [myProperty]="someExpression">

### @Output()
Declara uma propriedade de saída que dispara eventos que você pode assinar com uma associação de evento, ver exemplo completo [aqui](https://www.google.com):

    myEvent = new EventEmitter();
    
    <my-cmp (myEvent)="doSomething()">
    
### @HostBinding()
Vincula uma propriedade de elemento de host **(classe `valid`)** a uma propriedade de diretiva/componente **isValid**, ver exemplo completo [aqui](https://www.google.com):

     @HostBinding('class.valid') isValid;

### @HostListener()
Inscreve-se em um evento de elemento de host **(`click`)** com um método de diretiva/componente **onClick**, passando opcionalmente um argumento `($event)`, ver exemplo completo [aqui](https://www.google.com):

    @HostListener('click', ['$event']) onClick(e) {
        ...
    }

### @ContentChild()
Vincula o primeiro resultado da consulta de conteúdo do componente **(myFatherComponent)** a uma propriedade **(myChildComponent)** da classe, ver exemplo completo [aqui](https://www.google.com):

    @ContentChild(myFatherComponent) myChildComponent;

### @ContentChildren()
Vincula os resultados da consulta de conteúdo do componente **(myFatherComponent)** a uma propriedade **(myChildComponents)** da classe, ver exemplo completo [aqui](https://www.google.com):

    @ContentChildren(myFatherComponent) myChildComponents;

### @ViewChild()
Vincula o primeiro resultado da consulta de visualização do componente **(myFatherComponent)** a uma propriedade **(myChildComponent)** da classe. Não disponível para diretivas, ver exemplo completo [aqui](https://www.google.com):

    @ViewChild (myFatherComponent) myChildComponent;

### @ViewChildren()
Vincula os resultados da consulta de visualização de componente **(myFatherComponent)** a uma propriedade **(myChildComponents)** da classe. Não disponível para diretivas, ver exemplo completo [aqui](https://www.google.com):

    @ViewChildren (myPredicate) myChildComponents;

> LINK DE REFERÊNCIA: https://angular.io/guide/cheatsheet
