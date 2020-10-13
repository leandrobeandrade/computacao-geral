# @Component

- **changeDetection? -** A estratégia de detecção de alterações a ser usada para este componente. Membros **onPush** e **default**:

    - `onPush:` Usa a estratégia CheckOnce, o que significa que a detecção automática de mudança é desativada até ser reativada, definindo a estratégia como Padrão (CheckAlways). A detecção de alterações ainda pode ser chamada explicitamente. Essa estratégia se aplica a todas as diretivas filhas e não pode ser substituída.
    - `Padrão:` Usa a estratégia CheckAlways padrão, na qual a detecção de alterações é automática até que seja explicitamente desativada.
   
          @Component({
             selector: 'my-app',
             template: `Number of ticks: {{ numberOfTicks }}`,
              changeDetection: ChangeDetectionStrategy.OnPush,
          })

- **viewProviders? -** Define o conjunto de objetos injetáveis que são visíveis para seus filhos no DOM de exibição.

      class Greeter {                           // Classe Injetável
        greet(name:string) {
            return 'Hello ' + name + '!';
        }
      }

      @Directive({                              // Diretiva que usa a classe injetável
        selector: 'needs-greeter'
      })
      class NeedsGreeter {
        greeter:Greeter;

        constructor(greeter:Greeter) {
            this.greeter = greeter;
        }
      }

      @Component({                              // Classe que injeta a diretiva
        selector: 'greet',
        viewProviders: [ Greeter ],
        template: `<needs-greeter></needs-greeter>`
      })
      class HelloWorld {}

- **moduleId? -** O ID do módulo que contém o componente. O componente deve ser capaz de resolver URLs relativos para modelos e estilos. SystemJS expõe a variável _moduleName em cada módulo. Em CommonJS, isso pode ser definido como module.id.

      moduleId?: string         -       moduleId: '1'

- **templateUrl? -** O caminho relativo ou URL absoluto de um arquivo de modelo para um componente Angular. Se fornecido, não forneça um modelo embutido usando o modelo.

      templateUrl?: string      -       templateUrl: './example.component.html'

- **template? -** Um modelo embutido para um componente Angular. Se fornecido, não forneça um arquivo de modelo usando templateUrl.

      template?: string         -       template: `<p> Clicked: {{ clicks }} </p>`

- **styleUrls? -** Um ou mais caminhos relativos ou URLs absolutos para arquivos que contêm folhas de estilo CSS para usar neste componente.

      styleUrls?: string[]      -       styleUrls: ['./example.component.css']

- **styles? -** Uma ou mais folhas de estilo CSS embutidas para usar neste componente.

      styles?: string[]         -       styles: [`.example { color: green }`]

- **animations? -** Uma ou mais chamadas de **`gatilho`** de animação, contendo definições de **`estado`** e **`transição`**. Consulte o guia de animações e a documentação da API de [animações](https://angular.io/guide/animations).

      animations?: any[]        -       animations: [trigger(...)]

- **encapsulamento? -** Uma política de encapsulamento para o modelo e estilos CSS:

    - ViewEncapsulation.Native: Obsoleto. Em vez disso, use ViewEncapsulation.ShadowDom.
    - ViewEncapsulation.Emulated: Use CSS com shim que emula o comportamento nativo.
    - ViewEncapsulation.None: Use CSS global sem qualquer encapsulamento.
    - ViewEncapsulation.ShadowDom: Use Shadow DOM v1 para encapsular estilos.

- **interpolation? -** Substitui os delimitadores de início e fim de encapsulamento padrão ({{e}})

entryComponents?
Um conjunto de componentes que devem ser compilados junto com este componente. Para cada componente listado aqui, o Angular cria um ComponentFactory e o armazena no ComponentFactoryResolver.


**LINK:** https://angular.io/api/core/Component
