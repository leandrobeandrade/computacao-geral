# Decoradores de campo de classe para diretivas e componentes

> Decoradores importados do pacote **core** do Angular.

    import { Input, ... } from '@angular/core';
    
### @Input()
Declara uma propriedade de entrada que você pode atualizar por meio de vinculação de propriedade, ver exemplo completo [aqui](https://www.google.com):

    @Input() myProperty: string;

    <my-cmp [myProperty]="someExpression">

@Output () meuEvento = novo EventEmitter ();
Declara uma propriedade de saída que dispara eventos que você pode assinar com uma associação de evento (exemplo: <my-cmp (myEvent) = "doSomething ()">).

@HostBinding ('class.valid') isValid;
Vincula uma propriedade de elemento de host (aqui, a classe CSS válida) a uma propriedade de diretiva / componente (isValid).

@HostListener ('click', ['$ event']) onClick (e) {...}
Inscreve-se em um evento de elemento de host (click) com um método de diretiva / componente (onClick), passando opcionalmente um argumento ($ event).

@ContentChild (myPredicate) myChildComponent;
Vincula o primeiro resultado da consulta de conteúdo do componente (myPredicate) a uma propriedade (myChildComponent) da classe.

@ContentChildren (myPredicate) myChildComponents;
Vincula os resultados da consulta de conteúdo do componente (myPredicate) a uma propriedade (myChildComponents) da classe.

@ViewChild (myPredicate) myChildComponent;
Vincula o primeiro resultado da consulta de visualização do componente (myPredicate) a uma propriedade (myChildComponent) da classe. Não disponível para diretivas.

@ViewChildren (myPredicate) myChildComponents;
Vincula os resultados da consulta de visualização de componente (myPredicate) a uma propriedade (myChildComponents) da classe. Não disponível para diretivas.
