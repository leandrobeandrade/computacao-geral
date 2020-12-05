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
