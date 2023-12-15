# WebSocket

WebSocket é uma tecnologia avançada para criar uma ligação entre um cliente e um servidor (browser e servidor) e permitir a comunicação entre eles em tempo real. A principal diferença com o WebSocket é que permite receber dados sem ter de enviar um pedido separado, como, por exemplo, acontece no HTTP.

Uma vez estabelecida a ligação, os dados virão por si mesmos sem necessidade de enviar o pedido. É a vantagem de utilizar o protocolo WebSocket em chats ou relatórios de stock, onde precisa de receber informação constantemente actualizada. O protocolo pode receber e enviar informação simultaneamente, permitindo uma comunicação bidireccional full-duplex, o que resulta numa troca de informação mais rápida.

## Como funciona o WebSocket?

A ligação entre cliente e servidor permanece aberta até ser terminada por uma das partes ou ser encerrada por um timeout. Eles executam um aperto de mão para estabelecer uma ligação entre o cliente e o servidor. Uma ligação estabelecida permanece aberta, e a comunicação é efectuada utilizando o mesmo canal até que a ligação seja terminada no lado do cliente ou do servidor. As mensagens são trocadas bidireccionalmente.

O WebSocket permite encriptar os dados que são transmitidos. Para tal, é utilizado um suplemento sobre o protocolo WSS, que codifica os dados do lado do remetente e os descodifica do lado do destinatário. Para quaisquer intermediários, a informação permanece encriptada. Sem encriptação, os dados tornam-se um alvo de ameaças.

## Quando utilizar WebSocket?

O protocolo WebSocket é ideal quando se necessita de actualizações de dados em tempo real e a capacidade de enviar mensagens ao cliente. Aqui estão alguns dos casos de uso mais generalizado para soquetes Web:

- plataformas de troca
- aplicações de jogos
- chatbots
- notificações de "push"
- redes sociais
- aplicações de "chat"
- aplicações de "IoT"

## Porquê considerar a utilização do protocolo WebSocket?

WebSocket fornece atualizações em tempo real, fornecendo uma ligação entre o servidor e os clientes. São compatíveis com HTML5 e fornecem compatibilidade retroactiva com versões HTML mais antigas. Por conseguinte, são suportados por todos os navegadores web modernos - Google Chrome, Mozilla Firefox, Safari, e outros. 

É também compatível entre plataformas: Android, iOS, aplicações web, e aplicações desktop. Um único servidor pode ter múltiplas ligações WebSocket abertas simultaneamente e mesmo múltiplas ligações ao mesmo cliente, permitindo fácil escalonamento.

:arrow_right_hook: [link de referência](https://appmaster.io/pt/blog/o-que-sao-websockets-e-como-cria-los)
