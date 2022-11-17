# ANGULAR

Repositório dedicado a uma breve, sucinta e rápida documentação sobre o framework **`JavaScript`** desenvolvido pelo `Google`. O repositório traz um modelo de exemplos tanto teóricos como práticos sobre as principais características que o framework oferece, totalmente em português de uma maneira bem distribuída e de fácil localização, podendo ser compreendida tanto por usuários já com conhecimentos acerca do framework, tanto para quem quer aprender a desenvolver com o mesmo.

## Notas Gerais

- Todo o repositório é fundamentado na documentação oficial do framework
- O repositório é compreendido tanto por partes teóricas como práticas que se interligam através de links
- O repositório é constantemente atualizado e evoluído conforme o próprio framework

## Links acerca do desenvolvimento com o framework

- [Angular](https://angular.io) - documentação oficial
- [TypeScript](https://www.typescriptlang.org) - superset JavaScript utilizado pelo framework
- [RxJS](https://rxjs.dev) - pacote de utilitários que auxiliam no desenvolvimento
- [StackBlitz](https://stackblitz.com), [ngRun](https://ng-run.com), [CodeSandbox](https://codesandbox.io/?from-app=1) - ambiente de desenvolvimento online com fácil e rápida configuração para executar uma aplicação 

![angular](https://cdn-images-1.medium.com/max/1600/1*J_-vtvcqV1-v14WqkPWhiQ.png)

    interface Veiculo {
        String getModelo();
        void acelerar();
        void desacelerar();

        default String ligarAlarme() {
            return "Alarme do carro ligado!";
        }

        default String desligarAlarme() {
            return "Alarme do carro desligado!";
        }
    }

    interface Alarme {
        default String ligarAlarme() {
            return "Alarme ligado!";
        }

        default String desligarAlarme() {
            return "Alarme desligado!";
        }
    }

    class Carro implements Veiculo, Alarme {
        private String modelo;

        public Carro(String modelo) {
            this.modelo = modelo; 
        }

        @Override
        public String getModelo() {
            return modelo;
        }

        @Override
        public void acelerar() {
            System.out.println("O carro esta acelerando!");
        }

        @Override
        public void desacelerar() {
            System.out.println("O carro esta desacelerando!");
        }

        @Override
        public String ligarAlarme() {
            return Veiculo.super.ligarAlarme();
        }

        @Override
        public String desligarAlarme() {
            return Alarme.super.ligarAlarme();
        }
    }

    class Main {
        public static void main(String[] args) {
            Carro carro = new Carro("AZ21");

            System.out.println();
            System.out.println(carro.getModelo());
            System.out.println();

            carro.acelerar();
            carro.desacelerar();

            System.out.println(carro.ligarAlarme());
            System.out.println(carro.desligarAlarme());
        }
    }
    
    
    
    
