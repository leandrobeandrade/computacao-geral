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
       
- Tbm funciona declarar o caminho do bootsrap instalado no arquivo styles.scss ao invés de declarar no arquivo angular.json
- Diretivas são classes sem HTML enquanto Componentes são classes com HTML
- Eventos Html possuem interfaces para serem utilizadas. Ex: this.input = <HTMLInputElement>(event.target).value; / Dá para pegar o tipo no log do browser
- ngModel refere-se a uma propriedade no ts. Ex: prop
- ngModelChange atualiza sempre que esse model (propriedade) sofrer mudança de valor. Ex: (ngModelChange)="prop = event"
- No metadado @Input() o valor dentro dos parênteses serve para expor essa propriedade com um nome diferente da variável. Ex: @Input('cursos') nomeCursos: string
- No metadado @Component tbm é possível declarar variáveis do tipo @Input com o nome utilizado externamente. Ex: inputs: ['cursos']
- @EventEmitter pode ser utilizado no HTML como um evento personalizado. Ex: <input setar="algo($event)"> @Output() setar = new EventEmitter() algo(ev) { } 
