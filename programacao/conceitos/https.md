# HTTP

O HTTP, ou Hypertext Transfer Protocol, é o protocolo responsável por fazer a comunicação entre cliente e servidor em aplicações web, presente na camada 7 (aplicação) do modelo OSI ou na camada 4 do modelo TCP/IP, também conhecida como camada de aplicação. Como vemos em seu nome, ele é responsável por transferir hypertexto entre o cliente e o servidor. E qual a linguagem de hypertext que conhecemos? Isso mesmo, o famoso HTML.

## Cliente e Servidor

Essa comunicação cliente-servidor feita pelo HTTP é algo relativamente “simples”. Ela se baseia em duas entidades: o Request, que é a chamada feita do cliente para o servidor, e o Response, que é a resposta devolvida do servidor para o cliente. Basicamente, quando queremos acessar um site, o nosso navegador faz um request pedindo o HTML, e o servidor processa essa chamada e retorna o response com o HTML.

### Cliente

Para entendermos um pouco mais, no HTTP não existe navegador ou computador, mas sim o user-agent, que pode ser qualquer ferramenta que atue em nome do usuário e inicie uma chamada HTTP que siga um protocolo de comunicação previamente acordado. O user-agent mais conhecido é o navegador, mas pode ser um script ou programa. Quem inicia essa comunicação sempre é o cliente, apesar de hoje existirem técnicas para inverter isso.

Mas acaba sendo didático, pois não há como ter uma resposta(response) sem uma pergunta(request).

### Servidor

Do lado do servidor, também temos uma abstração, que precisa ser apenas uma única máquina virtual. Mesmo o nosso site usando vários servidores como banco de dados, balanceadores de carga, cache, entre outros, para o HTTP, precisamos de apenas um único ponto de acesso.

> Nota: Quando você acessa um site, parece que seu computador fala diretamente com o servidor, mas tem muito mais coisa envolvida. Entre seu computador e o servidor, há equipamentos como roteadores e modems, que funcionam como “intermediários” (ou proxies). Eles ajudam a levar a informação, e podem fazer coisas como armazenar partes do site para facilitar acessos futuros (cache), filtrar dados e distribuir a carga de trabalho entre vários servidores (balanceamento). Esses elementos trabalham em camadas “inferiores” do sistema de comunicação, ficando invisíveis para o protocolo HTTP que você usa para navegar.

## Aspectos Fundamentais do HTTP

O HTTP foi projetado para ser simples e totalmente legível para humanos, menos em versões recentes como o HTTP/2, que adicionaram algumas complexidades.

Um ponto que muitos não se atentam é que o HTTP é stateless, ou seja, ele não guarda estado. Mas o que isso significa? Basicamente, ele esquece tudo o que acabou de transportar. Você pode estar pensando: “Então como os e-commerces sabem que fui eu quem comprou aquele ar-condicionado em 12 prestações e não o meu vizinho?” Por causa da evolução do HTTP, ele permite o uso de sessões e cookies, então, através dessas ferramentas, conseguimos deixar a comunicação stateful, mantendo o estado e uma espécie de histórico das mensagens trocadas.

Outros pontos importantes são que ele é text-based, ou seja, toda a sua comunicação é baseada em texto, sendo necessário o uso de [marshalling](https://pt.wikipedia.org/wiki/Marshalling). Além disso, ele é connectionless, onde cada troca de mensagem abre e fecha uma conexão. Mas, devido ao alto custo de recursos para isso, hoje temos conexões persistentes com o cabeçalho Connection: Keep-alive e HTTP Pipelining, que foram trazidos pela RFC 2616, proposta em 1999 com o HTTP/1.1.

## Estrutura de uma Requisição e Resposta

Como sabemos, um protocolo nada mais é do que uma convenção de regras que seguimos para manter a coerência entre uma ou mais entidades, ou seja, um acordo mútuo entre as partes. Vamos ver agora quais são essas regras no HTTP.

## Request

Uma requisição HTTP é formada por vários componentes que permitem a comunicação entre o cliente e o servidor. A seguir estão os principais elementos que compõem uma requisição HTTP:

- Método (Method): Geralmente é um verbo ou substantivo que indica a ação desejada. Exemplos:
- GET: Solicita a recuperação de um recurso.
- POST: Envia dados para serem processados no servidor.
- OPTIONS: Verifica quais métodos são suportados por um recurso.
- HEAD: Obtém os headers de um recurso sem o corpo.
- Caminho (Path): Refere-se à URL que identifica o recurso no servidor, podendo incluir o domínio, o caminho e, eventualmente, a porta https://developer.mozilla.org:8080/docs
- Versão do Protocolo (Protocol Version): Indica qual versão do HTTP está sendo utilizada na requisição, como HTTP/1.1 ou HTTP/2.
- Headers (Cabeçalhos): São campos de chave-valor que fornecem informações adicionais para o servidor, como:
- Content-Type: Tipo de dados enviados no corpo (se aplicável).
- Corpo (Body): É opcional e é usado principalmente em métodos como POST e PUT. Contém os dados a serem enviados ao servidor, como formulários de login ou informações de um arquivo.

## Response

A resposta do servidor segue um formato semelhante à requisição, com componentes que retornam as informações solicitadas ou o status do processamento da requisição.

- Versão do Protocolo (Protocol Version): Indica a versão do HTTP utilizada pelo servidor para processar a resposta.
- Status Code (Código de Status): Um número que informa o estado da requisição, como:
- 200 OK: A requisição foi bem-sucedida.
- 404 Not Found: O recurso solicitado não foi encontrado.

> Veja alguns status code aqui [HTTPCats](https://http.cat/)

- Status Message (Mensagem de Status): Complementa o código de status com uma descrição legível (como “OK” para 200, “Not Found” para 404).
- Headers (Cabeçalhos): Assim como nas requisições, os cabeçalhos na resposta contêm informações adicionais, como:
- Content-Type: text/html Define o tipo de conteúdo retornado.
- Corpo (Body): Opcional, dependendo da natureza da resposta. Se for uma requisição GET, o corpo pode conter, por exemplo, uma página HTML, um JSON ou um arquivo de imagem, dependendo do conteúdo solicitado.

## Idempotência em Métodos HTTP
Um conceito fundamental, mas frequentemente debatido, é a idempotência em métodos HTTP. A idempotência refere-se à propriedade de que, dada a mesma entrada, uma operação produzirá o mesmo resultado sem alterar o estado do servidor de maneira adicional. Em outras palavras, não importa quantas vezes você execute a mesma operação, o resultado será o mesmo sendo um exemplo os métodos GET, PUT, DELETE.

Por exemplo:

GET: Quando você usa o método GET para solicitar uma listagem, o resultado será a mesma lista de itens, não importa se você faz a solicitação uma vez ou cem vezes. O GET é idempotente porque não altera o estado do servidor.

Por outro lado, o método POST não é idempotente. Cada solicitação POST pode criar um novo item, e fazer a mesma solicitação várias vezes resultará em vários itens diferentes sendo criados.

## Fluxo do HTTP

Antes de falarmos do fluxo do HTTP, precisamos entender que, por estar nas camadas mais acima, ele deixa muitas coisas para outros protocolos, como o TCP/IP, responsável pelos fluxos de comunicação e transporte. O HTTP apenas espera que haja uma camada de transporte estável e confiável entre cliente e servidor.

O fluxo básico de uma transação HTTP é:

O cliente abre uma conexão TCP com o servidor.
Envia uma mensagem HTTP (Request).
O servidor processa a requisição, gera a Response a envia de volta ao cliente.
A conexão é fechada ou reutilizada para futuras requisições.

:arrow_right_hook: [link de referência](https://www.tabnews.com.br/PauloCod/http-como-cliques-se-transformam-em-conexoes)