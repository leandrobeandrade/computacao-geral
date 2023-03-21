# S.O.L.I.D

S.O.L.I.D são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender. Esses princípios podem ser aplicados a qualquer linguagem de POO.

## S - Single Responsibility (Principío de Responsabilidade única)

O Single Resonsability é uma dos mais importantes, ele torna o seu código muito mais fácil de se entender e de dar manutenção.
Mas o que exatamente significa responsabilidade única? Como ja diz a sua descrição.

Vamos pensar em um classe que salva usuários no banco de dados, podendo fazer uma implementação para que a mesma também salve nome de livros no banco, dessa forma essa classe tem mais de uma responsabilidade, o que fere o principío de single responsability. Essa classe deve apenas salvar usuários no banco e nada mais, assim ela segue o principío de single responsability.

## O - Open-closed principle (Principío Aberto/Fechado)

Esse princípio diz que classes, métodos e funções podem estar abertas para extensões, porém fechadas para modificações.
Mas como assim? Imagino que você já deve ter criado ou visto aquelas funções que recebem um valor e uma flag, onde essa flag vai para um if que define se o código vai fazer X ou Y.

Então é basicamente isso que o open-closed principle diz para se evitar. Em um momento a sua classe sabe criar, porém com a necessidade do projeto ela "deixa" de criar e agora ela só edita. Quando na verdade ela pode começar a editar, mas nunca esquecendo como se criar.

## L - Liskov Substitution Principle (Princípio da Substituição de Liskov)

Esse princípio diz que se temos uma classe e criarmos uma outra classe a partir dela usando a herança, a classe nova deve conseguir substituir a classe que foi herdada sem que o código seja quebrado.

A ideia desse princípio é forçar você a pensar e nas suas abstrações e forçar que todas fiquem no nível certo.

Exemplo: Vamos supor que eu criei uma classe chamada Ave e nela nós temos os seguintes métodos bicar() e voar(). Se eu criar um classe chamada PicaPau ela vai herdar os métodos bicar e voar e está tudo bem pois um picapau faz isso. Porém se eu criar uma classe chamada Avestruz nós teremos um problema, pois um avestruz não voa. Logo a classe Avestruz se necessário não poderia substituir a classe Ave.

## I - Interface Segregation Principle (Princípio da Segregação de Interface)

Uma classe não deve implementar uma interface com métodos que ela não usa.
Por exemplo vamos imaginar uma interface chamada Pessoa onde nela nós devemos implementar 3 métodos, andar, falar e listaAlunos se nós criarmos um classe Professor baseado nessa interface, ela serve perfeitamente, porém para criar uma classe Aluno não pois um aluno não tem alunos. E isso vai de encontro também com os princípios anteriores.

## D - Dependency Inversion Principle (Principío da Inversão de Dependência )

Esse princípio diz que a sua classe não deve depender de detalhes de implementação de outras classes para poder funcionar.
Por exemplo, vamos supor que temos uma classe que cria usuários e nela nós pegamos a senha desses usuários e usamos uma lib para criar um hash e salvar essa senha de forma mais segura.
Porém, por algum motivo nós vamos ter que trocar essa lib e isso faz com o seu código quebre, pois a criação depende do código dessa lib para funcionar.

A ideia aqui é que a função de gerar o hash seja extraída e colocada em uma função que recebe a senha e retorna uma string que no caso é o hash e dentro dessa função você faça a implementação da sua lib. Pois assim você sempre estará respeitando a interface dela onde independente do que precise para você implementar essa lib a sua classe de criar usuários não irá quebrar.

https://dev.to/cristuker/entendendo-solid-17e8

https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530
