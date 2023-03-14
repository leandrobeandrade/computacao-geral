# Pq usar casing?

Na grande maioria das linguagens de programação (se não todas), declarações de variáveis não podem conter espaços entre as palavras:

    idade da pessoa = 18  // erro
    
Por isso existe a convenção denominada **`casing`** onde pode ser implementada em cada linguagem independentemente das suas regras para declarações de variáveis.

## Tipos de casings

- Snake case
- Kebab case
- Camel case
- Pascal case

### Snake case

> Sintaxe: separa cada palavra com um caractere de sublinhado (_).

    idade_da_pessoa = 18

Ao usar letras minúsculas todas as letras precisam ser minúsculas, o mesmo vale para letras maiúsculas.
Snake case é usada para criar nomes de variáveis e métodos, assim como também é uma boa escolha para nomear arquivos, pois mantém os nomes legíveis.

Você normalmente o encontrará mais ao programar em Python e não tanto ao programar em Java, JavaScript ou TypeScript.
Você também o encontrará ao trabalhar com bancos de dados, pois é usado para criar nomes de tabelas e colunas.

Há também uma versão em letras maiúsculas, onde todas as letras estão em maiúsculas - também conhecida como screaming snake case.

    IDADE_DA_PESSOA = 18

A versão em maiúscula é usada para declarar constantes na maioria das linguagens de programação. Uma constante é um item de dados cujo valor não muda ao longo da vida de um programa.

### Kebab case

> Sintaxe: separa cada palavra com um traço (-).

     idade-da-pessoa = 18

Todas as palavras são minúsculas e cada palavra é separada por um traço.
É outra das formas mais legíveis por humanos de combinar várias palavras em uma única palavra.

Você encontrará kebab case principalmente em URLs (abreviação de Uniform Resource Locator), é um endereço exclusivo para acessar um recurso na Web.

### Camel Case

> Sintaxe: primeira palavra minúscula, em seguida, coloca-se em maiúscula a primeira letra de cada palavra que se segue.

      idadeDaPessoa = 18

Assim, uma letra maiúscula aparece no início da segunda palavra e em cada nova palavra subseqüente que a segue.
Você encontrará camel case em Java, JavaScript e TypeScript para criar nomes de variáveis, funções e métodos.

:arrow_right_hook: [link de referência](https://www.freecodecamp.org/news/snake-case-vs-camel-case-vs-pascal-case-vs-kebab-case-whats-the-difference)
