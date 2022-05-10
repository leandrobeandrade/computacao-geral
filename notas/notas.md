# Notas Gerais

> Declarar 1 componente em 2 módulos diferentes

- 1 - Declarar e exportar o componente em um dos módulos
    
      ...
      declarations: [ ..., SuchComponent ],
      exporst: [ ..., SuchComponent ]
      
      export class ExampleModule

- 2 - Importar no outro módulo o módulo que foi declarado o componente a ser compartilhado
      
      ...
      imports: [ ..., ExampleModule ]
      
      export class OtherModule
      
---

> Importar função externa dentro de componente Angular

- 1 - Arquivo Externo:

      export function externalFunc(param1, param2, param3) {
        if (param1 === 'EXT') {
          param2 = 10;
          console.log(`O param2 é: ${param2} e o param3 é ${param3}`);
        } else {
          console.log(`param1 é: ${param1}, param2 é: ${param2} e param3 é ${param3}`);
        }
      }
      
 - 2 - Componente Angular
 
       import { externalFunc } from "./external";

       p1 = "EXT";
       p2;
       p3 = "INT";

       constructor() {}

       ngOnInit() {
         externalFunc(this.p1, this.p2, this.p3);
       }
       
# Paradigmas de Programação

Paradigmas de programação são diferentes formas ou estilos em que um determinado programa ou linguagem de programação pode ser organizado. Os paradigmas de programação não são mutuamente exclusivos, no sentido de que você pode usar práticas de diferentes paradigmas ao mesmo tempo sem nenhum problema.

Existem linguagens que foram construídas com um determinado paradigma em mente e possuem recursos que facilitam esse tipo de programação mais do que outras como Haskel por exemplo. Mas também existem linguagens "multiparadigmas", o que significa que podemos adaptar o código para se adequar a um determinado paradigma ou outro, como JavaScript e Python por exemplo.



    
