# @Directive
> Decorator que marca uma classe como uma diretiva Angular. Você pode definir suas próprias diretivas para anexar comportamento personalizado a elementos no DOM.

- **selector?** -O seletor CSS que identifica esta diretiva em um modelo e dispara a instanciação da diretiva:

      selector?: string

    - `name_element:` Seleciona pelo nome do elemento.
    - `.class:` Seleciona pelo nome da classe.
    - `[atribute]:` Seleciona pelo nome do atributo.
    - `[attribute=value]:` Seleciona pelo nome e valor do atributo.
    - `:not (sub_selector):` Seleciona apenas se o elemento não corresponder ao sub_selector.
    - `selector1, selector2:` Seleciona se seletor1 ou seletor2 corresponder.

      > Angular só permite que as diretivas sejam aplicadas em seletores CSS que não ultrapassam os limites dos elementos.
      >Para o seguinte modelo de HTML, uma diretiva com um seletor de entrada **[type=text]** seria instanciada apenas no elemento <input type = "text">.

- **inputs?** - Enumera o conjunto de propriedades de entrada vinculadas a dados para uma diretiva:

      inputs?: string[]
      
    > O Angular atualiza automaticamente as propriedades de entrada durante a detecção de alterações. A propriedade inputs define um conjunto de **diretivaProperty** para a configuração **bindingProperty**.

    - `directivaProperty:` especifica a propriedade do componente onde o valor é escrito.
    - `bindingProperty:` especifica a propriedade DOM de onde o valor é lido.

      > Quando bindingProperty não é fornecido, ele é considerado igual a directiveProperty. O exemplo a seguir cria um componente com duas propriedades vinculadas a dados.
      
          @Component({
            selector: 'bank-account',
            inputs: ['bankName', 'id: account-id'],
            template: `
              Bank Name: {{bankName}}
              Account Id: {{id}}
            `
          })
          class BankAccount {
            bankName: string;
            id: string;
          }

- **outputs?** - Enumera o conjunto de propriedades de saída associadas ao evento:

- **providers?** - Configura o injetor desta diretiva ou componente com um token que mapeia para um provedor de uma dependência:

- **exportAs?** - Define o nome que pode ser usado no modelo para atribuir esta diretiva a uma variável:

- **queries?** - Configura as consultas que serão injetadas na diretiva:

- **host?** - Mapeia as propriedades da classe para hospedar ligações de elemento para propriedades, atributos e eventos, usando um conjunto de pares de chave-valor:

- **jit?** - Quando presente, esta diretiva / componente é ignorado pelo compilador AOT. Ele permanece no código distribuído e o compilador JIT tenta compilá-lo em tempo de execução, no navegador. Para garantir o comportamento correto, o aplicativo deve importar @angular/compiler:

> LINK DE REFERÊNCIA: https://angular.io/api/core/Directive
