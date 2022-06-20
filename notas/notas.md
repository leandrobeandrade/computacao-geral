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

Os paradigmas principais podem ser classificados em:

- Imperativo
- Procedural
- Funcional
- Declarativo
- Orientado a Objetos

## Imperativo

A programação imperativa consiste em conjuntos de instruções detalhadas que são dadas ao computador para executar em uma determinada ordem. É chamado de "imperativo" porque, como programadores, ditamos exatamente o que o computador deve fazer, de uma maneira muito específica. A programação imperativa se concentra em descrever como um programa opera, passo a passo.
  
    const nums = [1,4,3,6,7,8,9,2];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 5) result.push(nums[i]);
    }

    console.log(result);     // [ 6, 7, 8, 9 ]
    
## Procedural (Processual)

A programação procedural é uma derivação da programação imperativa, acrescentando a ela o recurso de funções (também conhecidas como "procedures" ou "sub-rotinas"). Na programação procedural, o usuário é incentivado a subdividir a execução do programa em funções, como forma de melhorar a modularidade e a organização.

    const nums = [1,4,3,6,7,8,9,2];
    const result = [];

    function filterNums() {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 5) result.push(nums[i]);
      }

      console.log(result);     // [ 6, 7, 8, 9 ]   
    }
    
    filterNums();
  
## Funcional

A programação funcional leva o conceito de funções um pouco mais longe. Na programação funcional, as funções são tratadas como coringas, o que significa que podem ser atribuídas a variáveis, passadas como argumentos e retornadas de outras funções.

Outro conceito chave é a ideia de funções puras. Uma função pura é aquela que depende apenas de suas entradas para gerar seu resultado. E dada a mesma entrada, sempre produzirá o mesmo resultado. Além disso, não produz efeitos colaterais (qualquer alteração fora do ambiente da função). Também defende a ideia de que a modularidade do código e a ausência de efeitos colaterais facilitam a identificação e separação de responsabilidades dentro da base de código. Isso, portanto, melhora a capacidade de manutenção do código.

    const nums = [1,4,3,6,7,8,9,2];

    let func = function filterNums() {
      const result = []     // Variável interna

      for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 5) result.push(nums[i]);
      }

      return result;
    }

    console.log(func());      // [ 6, 7, 8, 9 ]
    
## Declarativa

A programação declarativa tem tudo a ver com esconder a complexidade e aproximar as linguagens de programação da linguagem e do pensamento humanos. É o oposto direto da programação imperativa no sentido de que o programador não dá instruções sobre como o computador deve executar a tarefa, mas sim sobre qual resultado é necessário.

    const nums = [1, 4, 3, 6, 7, 8, 9, 2];

    let func = function numBiggest() {
      const result = [];

      result.push(...nums.filter(num => num > 5));

      return result;
    }

    console.log(func());

## Orientada a Objetos

O conceito central da POO é separar interesses em entidades que são codificadas como objetos. Cada entidade agrupará um determinado conjunto de informações (propriedades) e ações (métodos) que podem ser realizadas pela entidade. Faz uso pesado de classes (que são uma maneira de criar novos objetos a partir de um blueprint ou clichê que o programador define). Objetos que são criados a partir de uma classe são chamados de instâncias.

- 1
- - 2
- - - 3
