# Arquitetura Web Monolítica e Microserviços

Tratam-se de padrões de arquitetura web, que geralmente são classificadas em dois grandes tópicos — arquiteturas monolíticas ou orientadas a micro-serviços.

## Arquiteturas Monolíticas

Esta é a arquitetura mais comum e mais utilizada para desenvolvimento de aplicações web devido a sua simplicidade e também por ser a mais antiga utilizada. De forma geral, uma aplicação monolítica tem as características:

- Pode suportar diferentes tipos de cliente como desktop/mobile
- Pode exportar APIs para comunicação com terceiros
- Pode integrar outras aplicações utilizando serviços REST/SOAP ou filas de mensagens
- Pode tratar requisições HTTP, executar regras de negócio, acessar banco de dados e trocar informações com outros sistemas
- Podem escalar verticalmente aumentando o poder das máquinas em que a aplicação roda ou horizontalmente com a adição instâncias atrás de um Load Balancer

Um exemplo típico de uma aplicação que pode ser escrita utilizando este padrão de arquitetura poderia ser a seguir:

> Imagine um sistema de reservas para um hotel que recebe reservas online de clientes, verifica a disponibilidade dos quartos, valida as formas de pagamento, faz a reserva e notifica o hotel. Esta aplicação consiste de várias camadas e componentes incluindo um app cliente bem bacana e vários componentes de back-end responsáveis pelas reservas, pagamentos e notificações.

Esta aplicação poderia ter o deploy feito em um único JAR rodando em um container web como o Tomcat e escalado horizontalmente com várias instâncias atrás de um Apache atuando como Load Balancer.

### Vantagens:

- Maior facilidade de desenvolvimento — principalmente pela uniformidade do stack de tecnologias entre todos os layers
- Mais simples para testar já que toda a aplicação é entregue em um único pacote, o que facilita testes de integração e end-to-end
- Mais simples e rápido para efetuar o deploy, já que temos um único pacote para se preocupar
- Mais simples de se escalar com instâncias atrás de um Load Balancer
- Necessita de um time menor para manter a aplicação
- Os desenvolvedores compartilham de um conhecimento equalizado, já que trata-se de um único codebase
- O stack é mais simples e fácil de aprender
- O desenvolvimento inicial é mais rápido, facilitando o time to market
- Precisa de uma infraestrutura simples. Algumas vezes um simples container ou JVM é o suficiente

### Desvantagens:

- Os componentes tem alto acoplamento, o que resulta em efeitos colaterais como regressão de problemas devido a atualização
- Tende a se tornar complexo e gigante depois de certo tempo, aumentando o tempo de desenvolvimento. Novas funcionalidades vão demorar mais para serem desenvolvidas e o refactor será cada vez mais complexa devido ao alto acoplamento
- A aplicação toda precisa de um deploy para adição de qualquer feature
- É menos confiável devido ao acoplamento dos módulos. Um pequeno problema em um serviço não muito importante pode quebrar a aplicação toda
- A adoção de novas tecnologias é difícil e geralmente toda a aplicação precisa ser migrada o que geralmente resulta em um stack defasado a longo prazo
- Serviços críticos não podem ser escalados individualmente o que aumenta o uso de recursos
- Tempo longo de inicialização e grande utilização de CPU e memória
- As equipes serão mais interdependentes e será desafiador escalar as equipes.


## Arquitetura de Micro Serviços

Agora falando da febre do momento, que está ganhando cada vez mais popularidade entre arquitetos e desenvolvedores de software. Este tipo de arquitetura pode oferecer quase todas as funcionalidades de uma arquitetura monolítica. Adicionalmente, oferece muitas outras funcionalidades e maior flexibilidade e consequentemente é geralmente considerada uma escolha superior para aplicações complexas. Diferentemente da arquitetura monolítica é difícil generalizar esta opção pois ela pode variar muito conforme o caso de uso e aplicações. De qualquer forma, também existem algumas vantagens e desvantagens que devem ser observadas na hora da decisão.

De forma geral, esta arquitetura compartilha de alguns benefícios:

- Os componentes tem baixo acoplamento. Podem ser desenvolvidos, testados, “deployados” e escalados de forma independente
- Os componentes podem ser desenvolvidos cada um com um stack de tecnologias própria
- Eles geralmente implementam funcionalidades avançadas e padrões como o service discovery, circuit breaking, load balancing etc.
- São mais leves e com funcionalidades especificas. Um serviço de autenticação, por exemplo, só sabe fazer autenticação.
- Geralmente tem um longo e extenso setup de monitoramento e troubleshooting

Para este tipo de arquitetura, vamos pensar no seguinte cenário:

> Imagine que você vai desenvolver um sistema de e-commerce gigante, onde usuários poderão navegar entre categorias, manter favoritos, adicionar itens no carrinho, fazer e acompanhar pedidos e por ai vai. O sistema precisa fazer gestão de estoque, de usuários, múltiplos métodos de pagamento, gestão de compras e entrega etc. A aplicação precisa de vários componentes específicos, incluíndo um gateway para o UI, que entrega uma interface complexa, trata autenticação e balanceamento, assim como vários outros módulos de back-end para gestão de estoque, verificação de pagamentos e gestão de compras. Precisa também de monitoramento e failover automático para os serviços. Ufa!

A aplicação será “deployada” com múltiplos JARs dentro de containers Docker que ficarão em um servidor cloud público.

### Vantagens:

- Baixo acoplamento e melhor isolamento, mais fácil de testar e mais rápido para inicializar a aplicação
- Interações de desenvolvimento mais rápidas. Novos recursos podem ser desenvolvidos mais rapidamente e os existentes facilmente refatorados
- Problemas como memory leak em um dos serviços estão isolados e não vão derrubar a aplicação toda
- A adoção de novas tecnologias é mais simples, os componentes podem ser atualizados de forma independente e de forma incremental, possibilitando um stack com diferentes tecnologias e linguagens
- Os serviços serão inicializados de forma mais rápida e possivelmente de forma paralela
- Os times serão independentes. Encaixa direitinho em squads e times ágeis

### Desvantagens:

- Em termos gerais a aplicação é mais complexa
- Os testes de end-to-end e integração são complexos e custosos, pois existem mais partes móveis dentro da aplicação
- A aplicação toda é mais complexa de efetuar o “deploy” pois geralmente envolvem containers e virtualização
- Escalar é mais fácil, porém definir as regras de upscaling são mais complexas e necessitam de funcionalidades avançadas como o Service Discovery, DNS Routing e por ai vai…
- Geralmente precisa de um time maior para manter o software
- O skill set da equipe se torna mais variado, dificultando o compartilhamento de conhecimento e deixando reposição de recursos mais complicada
- O stack de tecnologias é mais complexo e é mais difícil de aprender
- O desenvolvimento inicial é mais lento, atrasando o time to market
- Precisa de uma infraestrutura complexa. Docker, multiplas JVMs e app containers

Como escolher o melhor padrão?

Ao iniciar um novo projeto, é sempre difícil escolher um padrão de arquitetura nos dias de hoje. Há muitos fatores a serem levados em conta e é fácil ficar confuso com todos os padrões e tecnologias diferentes. Vamos olhar algumas diretrizes gerais sobre quando escolher cada uma destas arquiteturas.

## Quando utilizar uma Arquitetura Monolítica

Aqui não existe bala de prata. A idéia aqui é compartilhar um guia geral para auxiliar a decisão.

> - Quando o escopo do aplicativo é pequeno e bem definido, e você tem certeza de que o aplicativo não crescerá tremendamente em termos de recursos. Por exemplo, um blog, um aplicativo CRUD simples e assim por diante.
>
> - Quando o tamanho da equipe é pequeno, digamos menos de oito pessoas (não é um limite difícil, mas prático) .
>
> - Quando o conjunto de habilidades médio da equipe é de desenvolvedores Júnior ou Pleno.
>
> - Quando o tempo de mercado é crítico.
>
> - Quando você não quer gastar muito em infra-estrutura, monitoramento e assim por diante.
>
> - Quando sua base de usuários é bastante pequena e você não espera que eles cresçam. Por exemplo, um aplicativo da empresa segmentando um conjunto específico de usuários.

Na maioria dos casos práticos, esta arquitetura vai ser o suficiente. Lembrando também que ela pode ser evoluída para uma versão orientada a micro serviços no futuro.

### Quando utilizar uma Arquitetura de Micro Serviços

A decisão aqui é mais complexa e pode envolver diversas considerações entre muitos dos pontos listados a seguir:

> - Quando o escopo do aplicativo é grande e bem definido e você tem certeza que o aplicativo crescerá tremendamente em termos de recursos. Por exemplo, uma loja de comércio eletrônico on-line, um serviço de mídia social, um serviço de streaming de vídeo com uma grande base de usuários, um provedor de API e assim por diante.
>
> - Quando o tamanho da equipe é grande, deve haver membros suficientes para desenvolver os componentes individuais de maneira independente.
>
> - Quando o conjunto médio de habilidades da equipe é bom e os membros da equipe estão confiantes sobre padrões avançados de micro serviço.
>
> - Quando o tempo de comercialização não é crítico. A arquitetura de micros serviço levará mais tempo para lançar a primeira versão.
>
> - Quando você estiver pronto para gastar mais em infraestrutura, monitoramento e assim por diante, a fim de melhorar a qualidade do produto.
>
> - Quando sua base de usuários é enorme e você espera que ela cresça. Por exemplo, um aplicativo de mídia social segmentado para usuários em todo o mundo.

:arrow_right_hook: [link de referência](https://lgertel.medium.com/padr%C3%B5es-de-arquitetura-web-monol%C3%ADtica-ou-micro-servi%C3%A7os-7b3f0c9394fe)
