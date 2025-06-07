# S.O.L.I.D

`S`.`O`.`L`.`I`.`D` são cinco princípios da programação orientada a objetos que facilitam no desenvolvimento de softwares, tornando-os fáceis de manter e estender. Esses princípios podem ser aplicados a qualquer linguagem de POO.

## S - Single Responsibility (Principío de Responsabilidade única)

O Single Resonsability é uma dos mais importantes, ele torna o seu código muito mais fácil de se entender e de dar manutenção.
Mas o que exatamente significa responsabilidade única? Como ja diz a sua descrição.

Vamos pensar em um classe que salva usuários no banco de dados, podendo fazer uma implementação para que a mesma também salve nome de livros no banco, dessa forma essa classe tem mais de uma responsabilidade, o que fere o principío de single responsability. Essa classe deve apenas salvar usuários no banco e nada mais, assim ela segue o principío de single responsability.

:x:

    class User {
      constructor(public name: string, public email: string) {}

      saveUser() { // Lógica de salvar usuário no banco }
      sendEmailToUser() { // Lógica de enviar email }
    }

:heavy_check_mark:

    class User {
      constructor(public name: string, public email: string) {}
    }

    class UserRepository() { // Lógica de salvar usuário no banco }
    
    class EmailService() { // Lógica de enviar email }

## O - Open-closed principle (Principío Aberto/Fechado)

Esse princípio diz que classes, métodos e funções podem estar abertas para extensões, porém fechadas para modificações.
Mas como assim? Imagino que você já deve ter criado ou visto aquelas funções que recebem um valor e uma flag, onde essa flag vai para um if que define se o código vai fazer X ou Y.

Então é basicamente isso que o open-closed principle diz para se evitar. Em um momento a sua classe sabe criar, porém com a necessidade do projeto ela "deixa" de criar e agora ela só edita. Quando na verdade ela pode começar a editar, mas nunca esquecendo como se criar.

:x:

    class PaymentProcessor {
      process(type: string) {
        if(type === 'card') { // Lógica de cartão }
        if(type === 'invoice') { // Lógica de fatura }
        // ... Novas condições podem ser criadas modificando a classe
      }
    }

:heavy_check_mark:

    interface PaymentStrategy {
      process(): void;
    }

    class CardPayment implements PaymentStrategy {
      process() { // Lógica de cartão }
    }

    class InvoicePayment implements PaymentStrategy {
      process() { // Lógica de fatura }
    }

    class PaymentProcessor {
      process(strategy: PaymentStrategy) {
        strategy.process();
      }
    }
    

## L - Liskov Substitution Principle (Princípio da Substituição de Liskov)

Esse princípio diz que se temos uma classe e criarmos uma outra classe a partir dela usando a herança, a classe nova deve conseguir substituir a classe que foi herdada sem que o código seja quebrado.

A ideia desse princípio é forçar você a pensar e nas suas abstrações e forçar que todas fiquem no nível certo.

Exemplo: Vamos supor que eu criei uma classe chamada Ave e nela nós temos os seguintes métodos bicar() e voar(). Se eu criar um classe chamada PicaPau ela vai herdar os métodos bicar e voar e está tudo bem pois um picapau faz isso. Porém se eu criar uma classe chamada Avestruz nós teremos um problema, pois um avestruz não voa. Logo a classe Avestruz se necessário não poderia substituir a classe Ave.

:x:

    class Bird {
      fly() { console.log('Voando.') }
    }

    class Ostritch extends Bird {
      fly() { throw new Error('Avestruz não pode voar!') }
    }

:heavy_check_mark:

    interface Flyable {
      fly(): void;
    }

    class Bird implements Flyable {
      fly() { console.log('Voando.') }
    }

    // Avestruz implementa outra interface
    class Ostritch implements Biped {
      walk() { console.log('Andando.') }
    }

## I - Interface Segregation Principle (Princípio da Segregação de Interface)

Uma classe não deve implementar uma interface com métodos que ela não usa.
Por exemplo vamos imaginar uma interface chamada Pessoa onde nela nós devemos implementar 3 métodos, andar, falar e listaAlunos se nós criarmos um classe Professor baseado nessa interface, ela serve perfeitamente, porém para criar uma classe Aluno não, pois um aluno não tem alunos. E isso vai de encontro também com os princípios anteriores.

:x:

    interface Worker {
      work(): void;
      eat(): void;
      sleep(): void;
    }

    class HumanWorker implements Worker { // implementa todos os métodos }
    
    class RobotWorker implements Worker {
      work() { // OK }
      eat() { // Método não condiz }
      sleep() { // Método não condiz }
    }

:heavy_check_mark:

    interface Workable {
      work(): void;
    }

    interface Eatable {
      eat(): void;
    }

    interface Sleepable {
      sleep(): void;
    }

    class HumanWorker implements Workable, Eatable, Sleepable {
      work() { // Lógica }
      eat() { // Lógica }
      sleep() { // Lógica }
    }

    class RobotWorker implements Workable {
      work() { // Lógica }
    }

## D - Dependency Inversion Principle (Principío da Inversão de Dependência )

Esse princípio diz que a sua classe não deve depender de detalhes de implementação de outras classes para poder funcionar.
Por exemplo, vamos supor que temos uma classe que cria usuários e nela nós pegamos a senha desses usuários e usamos uma lib para criar um hash e salvar essa senha de forma mais segura.
Porém, por algum motivo nós vamos ter que trocar essa lib e isso faz com o seu código quebre, pois a criação depende do código dessa lib para funcionar.

A ideia aqui é que a função de gerar o hash seja extraída e colocada em uma função que recebe a senha e retorna uma string que no caso é o hash e dentro dessa função você faça a implementação da sua lib. Pois assim você sempre estará respeitando a interface dela onde independente do que precise para você implementar essa lib a sua classe de criar usuários não irá quebrar.

:x:

    class MySQLDatabase {
      save(data: any) { // Lógica }
    }

    class UserService {
      private db: MySQLDatabase;

      constructor() {
        this.db = new MySQLDatabase(); // Dependência concreta
      }

      saveUser(user: any) {
        this.db.save(user);
      }
    }

:heavy_check_mark:

    interface IDatabase {
      save(date: any): void;
    }

    class MyySQLDatabase implements IDatabase {
      save(data: any) { // Lógica }
    }

    class UserService {
      private db: IDatabase;  // depende da abstração
      
      constructor(database: IDatabase) {  // injeção de dependência
        this.db = database;
      }

      saveUser(user: any) {
        this.db.save(user);
      }
    }

:arrow_right_hook: [link de referência](https://dev.to/cristuker/entendendo-solid-17e8)

:arrow_right_hook: [link de referência](https://medium.com/desenvolvendo-com-paixao/o-que-%C3%A9-solid-o-guia-completo-para-voc%C3%AA-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
