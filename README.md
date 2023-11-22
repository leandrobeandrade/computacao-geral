# Computação geral

Anotações com links para documentações, artigos e postagens relacionados aos mais diversos assuntos sobre computação em geral.

## :closed_book:	Anotações Gerais

- Desenvolvimento de software
- Conceitos gerais de programação
- Sistemas operacionais

![image](https://user-images.githubusercontent.com/24658433/226499609-2d4148b8-b4dd-43ce-82f4-78d25e772034.png)

# AWS - Anotações Curso Udemy 

Anotações referentes ao curso [Certificação AWS Cloud Practitioner](https://www.udemy.com/share/1036jg3@Z5JLa7CoDlHRdpiau8rnb71cirlR2GLSuTbMMD1BdhcpWZPm1h-SnXREhuhUhoRy/) na plataforma Udemy.

## Tipos de Cloud - do mais básico para o mais completo

- **Iaas** -> Infrasctructure-as-a-service (Utiliza uma infraestrutura já pronta para ser utilizada como serviço)
- **Paas** -> Plataform-as-a-service (Utiliza uma plataforma já pronta para ser utilizada como serviço)
- **Saas** -> Software-as-a-service (Utiliza uma aplicação já pronta para ser utilizada como serviço)

## Termos de Cloud

- **Public** -> S3 como exemplo
- **Hybrid** -> app publico e banco de dados privado como exemplo
- **Private** -> .gov como exemplo

## AWS Services - principais

- **Computação** -> Amazon EC2
- **Armazenamento** -> S3 (Amazon Simple Storage Service)
- **Banco de Dados** -> AWS DynamoDB, AWS RDS, AWS Redshift
- **Redes** -> AWS API Gateway, AWS Cloud Wan, AWS VPN
- **Análises** -> AWS Athena, AWS CloudSearch, AWS EMR
- **Machine Learning** -> AWS Forecast, AWS Kendra, AWS Lex, AWS Omics
- **Segurança Geral** -> AWS Cognito, AWS Detective, AWS GuardDuty, AWS Inspector
- [todos os serviços](https://aws.amazon.com/pt/products/?aws-products-all.sort-by=item.additionalFields.productNameLowercase&aws-products-all.sort-order=asc&awsf.re%3AInvent=*all&awsf.Free%20Tier%20Type=*all&awsf.tech-category=*all)

## Três principais formas de interagir com os serviços da AWS

- Management Console
- Comand Line Interface (CLI)
- Software Development Kit (SDK)

## EC2 - Elastic Compute Cloud

Máquinas virtuais para rodar aplicações.

- controle
- segurança
- integrado com outros serviços AWS
- baixo custo

## ECS - Elastic Container Service

Serviço de orquestração de contêineres.

- implantação rápida, confiável e eficiente
- independe de ambiente

## Scaling up

Escala nas próprias instâncias, causando upgrade dos recursos das mesmas.

## Scaling Out

Escala as instâncias criando novas instâncias com os mesmo recursos da padrão conhecida como launch template.

> Auto Scaling (faz parte do scaling out)

Cria novas instâncias ou diminui o número das instâncias automáticamente através de policies inseridas dentro do auto scaling group.

> Load Balancer (trabalha em conjunto com auto scaling)

Distribui as requisições para os servidores conhecendo suas disponibilidades, caso a instância esteja com algum problema isso é detectado pelo LB e a requisição é redirecionado para outro servidor.

- ALB (Application Load Balancer) -> trabalha na camada 7 no modelo OSI, mais inteligente
- NLB (Network Load Balancer) -> trabalha na camada 4 no modelo OSI, mais rápido

## S3 - Simples Storage Service

- Não tem limites de dados
- 1 objeto upado pode ter no máximo 5TB
- Garante durabilidade de 99.999
- Garante disponibilidade de 99.95 até 99.99

## AMI - Amazon Machine Image

- Imagens privadas (próprias) 
- públicas (AWS fornece e empresas terceiras utilizam)

## Billing e Pricing

- **pay as you go** -> pague conforme utiliza (final do mês)
- **pay for you use** -> pague de acordo com o que utiliza
- **pay less as you use more** -> pague menos, se utilizar mais
- **pay less as you reserved** -> pague recursos reservados
- **CAPEX** -> Capital expenditure (Paga antes de usar, valor fixo e mais caro)
- **OPEX** -> Operation expenditure (Paga quando utiliza)
- **Budget x Cost Explorer** -> Orçamento antes do uso(Budget), Relatório da conta após uso(Cost Explorer)

## Security 

> Artifact

Disponível no console, é um portal de autoatendimento para recuperação de artefatos de auditoria que oferece aos clientes acesso sob demanda à documentação de conformidade e aos acordos da AWS.

> Responsability model (parte do cliente)

Banco de dados seguro, webserver dentro de EC2 tem que ter garantia assim como instalação de SO, configurações seguras de network e firewall , entre outros.

> AWS WAF e Shield

- WAF -> Web application firewall, analisa os potenciais riscos na camada 7
- Shield -> Escudo - detecta aumento de volume e identifica se é genuíno ou por ataques

> Security Services

- Inspector -> agente instalável em uma instância que inspeciona os ambientes EC2
- Trusted Advisor -> trabalha em real time e identifica a estrutura AWS utilizada
- Cloud Trail -> monitora API calls ou AWS console

> Athena x Macie

- Athena -> fornece pesquisa através de standard SQL para pegar dados de um S3 que recebe dados de um EC2
- Macie -> fornece pesquisa através de marchine learning para pegar geralmente dados confidenciais e sensíveis de um S3 através de natural language proccess (NLP), só funciona na região

## Cloudformation

> Beneficios

- Infra code -> controle, versionamento, visualizar mudanças
- custo -> tag, custo estimado, por padrão gratuito desde que esteja em free tier

> code template

Cria as máquinas e serviços em 2 ou 3 minutos por linguagens declarativas como JSON e Yaml.

## On-Premises Deployment

Implantação local ou implantação de nuvem privada. Fornece infraestrutura e serviços AWS em local de borda, conhecida também como AWS Outposts.

## Benefícios da Nuvem AWS

Existem seis benefícios cruciais da Nuvem AWS:

- Troque despesas iniciais por despesas variáveis

      A Nuvem AWS garante que você pague apenas pelo que usar. Isso ajuda a evitar investimentos
      desnecessários em infraestrutura, como servidores ou data centers.

- Beneficie-se de enormes economias de escala

      Ao utilizar a computação em nuvem, você pode receber um custo variável mais barato. Devido ao
      grande número de clientes na nuvem, você pode obter taxas de pagamento conforme o uso mais baixas.

- Pare de adivinhar a capacidade

      A Nuvem AWS ajuda você a reduzir seu custo de capacidade. Você só paga o que usar.

- Aumentar velocidade e agilidade

      A Nuvem AWS torna a implantação de aplicativos rápida e fácil.

- Pare de gastar dinheiro executando e mantendo data centers

      A Nuvem AWS oferece mais tempo para você se concentrar em seus clientes e aplicativos. Ele faz isso
      gerenciando servidores para você.

- Torne-se global em minutos

      A Nuvem AWS permite implantar aplicativos rapidamente e com pouca latência.
