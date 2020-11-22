# Ganchos de Ciclo de Vida

> Métodos para Classes que controlam os componentes conforme o seu ciclo.

- **constructor() -** Chamado antes de qualquer outro gancho de ciclo de vida. Use-o para injetar dependências, evitar usá-lo para realizar ações:

      construtor(myService: MyService, ...) {...}

- **ngOnChanges() -** Chamado após cada alteração nas propriedades de entrada e antes de processar o conteúdo ou visualizações filhas:

      ngOnChanges(changeRecord) {...}
      
- **ngOnInit() -** Chamado após o construtor, inicializando as propriedades de entrada e a primeira chamada para ngOnChanges: 

      ngOnInit() {...}

- **ngDoCheck() -** Chamado sempre que as propriedades de entrada de um componente ou diretiva são verificadas. Use-o para estender a detecção de alterações, executando uma verificação personalizada:

      ngDoCheck() {...}

- **ngAfterContentInit() -** Chamado após ngOnInit quando o conteúdo do componente ou da diretiva foi inicializado:

      ngAfterContentInit() {...}

- **ngAfterContentChecked() -** Chamado após cada verificação do conteúdo do componente ou da diretiva:

      ngAfterContentChecked() {...}

- **ngAfterViewInit() -** Chamado após ngAfterContentInit quando as visualizações do componente e visualizações filho / a visualização em que uma diretiva está foi inicializada:

      ngAfterViewInit() {...}

- **ngAfterViewChecked() -** Chamado após cada verificação das visualizações do componente e visualizações filhas / visualização em que uma diretiva está.

      ngAfterViewChecked() {...}

- **ngOnDestroy() -** Chamado uma vez, antes que a instância seja destruída:

      ngOnDestroy() {...}

> LINK DE REFERÊNCIA: https://angular.io/guide/cheatsheet
