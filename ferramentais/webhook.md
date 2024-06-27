# Webhook

Webhook é uma forma de recebimento de informações, que são passadas quando um evento acontece. Na prática, é a forma de receber informações entre dois sistemas de uma forma passiva. Além disso, o webhook (também conhecido como retorno de chamada web ou HTTP e, ainda, impulso API) é uma maneira prática para um app ou sistema fornecer outras aplicações com informações em tempo real. Da mesma forma, ele fornece dados para outros aplicativos, e é muito eficiente tanto para o prestador de serviço, como para o consumidor.

## Funcionamento

A maioria dos webhooks posta dados para você a partir de arquivos como JSON (tipicamente), XML ou pelos dados de formulário (application / x-www-form-urlencoded ou multipart/form-data, por exemplo). Dessa forma, o seu provedor lhe dirá como isso será entregue ou dará uma escolha de seleção.

Ambos são bastante fáceis de interpretar, e a maioria dos frameworks web vai fazer o trabalho para você. No entanto, se não o fizerem, você pode precisar recorrer a outros tipos de funções e ajuda. Podemos explicar como funciona nossa aplicação via webhook aqui. 

Além disso, para entendermos o que os webhooks fornecem, podemos usar uma ferramenta, como RequestBin, para recolher os pedidos da webhook.

## Diferença entre webhook e API

A principal diferença é que um webhook funciona automaticamente, enquanto a API precisa de uma solicitação para que a integração seja executada. No caso de uma API, a conexão para enviar ou receber dados é aberta depois dessa solicitação. Então, a ação é concluída e a conexão é fechada.

Para usar uma API, é preciso ter conhecimento em programação – ou contar com pelo menos um programador na equipe. Já o webhook notifica o usuário sobre processos que ele deseja saber e seu uso não depende de um procedimento: basta configurar os parâmetros em uma URL, como vamos mostrar no próximo tópico, e as notificações serão enviadas quando determinada ação for tomada.

## Principais formas de uso

> Se não há padrão de mudança nos dados

Há situações em que você precisa de uma informação encaminhada de um ambiente externo, mas não é possível estimar quando esse dado estará disponível.

Nesses casos, uma API demandaria uma série de requisições, enquanto para usar o webhook, seria preciso apenas uma conexão – o que torna essa uma alternativa mais eficiente.

> Em atualizações rápidas

Pequenas notificações recebidas na hora são ideais para se usar um webhook – principalmente para empresas que aceitam pagamento por cartão de crédito, que podem notificar o cliente sobre a transação.

> Se API não for uma opção

O desenvolvimento de um webhook pode permitir a troca de dados em sistemas que não oferecem uma API, ou que ela não atenda às necessidades da aplicação.

:arrow_right_hook: [link de referência](https://blog.vindi.com.br/o-que-sao-webhooks/)
