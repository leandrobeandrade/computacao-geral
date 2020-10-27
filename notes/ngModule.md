# @ngModule()

> Define um módulo que contém componentes, diretivas, pipes e provedores.

    import { NgModule } from '@angular/core';

    @NgModule ({declarações: ..., importações: ..., exportações: ..., provedores: ..., bootstrap: ...})

    class MyModule {}

- **declarations:** Lista de componentes, diretivas e pipes que pertencem a este módulo.

      [AppComponent, HelloComponent, MyDatePipe]

- **imports:** Lista de módulos a serem importados para este módulo. Tudo desde módulos importados estão disponíveis para as declarações deste módulo.

      [CommonModule, BrowserModule, NgModule]

- **exports:** Lista de componentes, diretivas e pipes visíveis para os módulos que importam este módulo.

      [AppComponent, MyDatePipe]

- **providers:** Lista de provedores de injeção de dependência visíveis para o conteúdo deste módulo e para importadores deste módulo.

      [MyService, {provide: ...}]

- **entryComponents:** Lista de componentes não referenciados em nenhum modelo alcançável, por exemplo, criado dinamicamente a partir do código.

      [ModalComponent, FormComponent]

- **bootstrap:** Lista de componentes a serem inicializados quando este módulo for inicializado.

       [AppComponent]
