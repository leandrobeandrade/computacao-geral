# Minificação no JavaScript

A minificação, também conhecida como minimização, é o processo de remover todos os caracteres desnecessários do código fonte do JavaScript sem alterar sua funcionalidade. Isto inclui a remoção de espaços em branco, comentários e ponto-e-vírgula, juntamente com o uso de nomes e funções de variáveis mais curtas. A minificação do código do JavaScript resulta em um arquivo de tamanho compacto.

Por exemplo, aqui está um bloco de código antes e depois da minificação:

> Antes da minificação: 8 linhas de código

    function digaOi(nome) {
      console.log('Oi ' + nome + ', prazer em te conhecer!');
    }

    digaOi('Fulano');

> Após a minificação: 1 única linha de código

    function digaOi(o){console.log('Oi '+nome+', prazer em te conhecer!')}digaOi('Fulano');

A minificação acelera o carregamento da página web, melhorando assim a experiência do site, deixando tanto os visitantes como os mecanismos de pesquisa satisfeitos.

## Qual a diferença entre minificação e ofuscação, compactação, criptografia ou uglificação?

- **Uglificação:** Basicamente, é o mesmo que minificação. [Uglify JS](https://lisperator.net/uglifyjs/) é uma biblioteca JavaScript para a minificação de arquivos JavaScript. "Uglificar" um arquivo JavaScript é minificá-lo usando Uglify. A uglificação melhora o desempenho reduzindo, ao mesmo tempo, a legibilidade.

- **Criptografia:** É o processo de tradução de dados, chamados de dados simples, em dados codificados. Esses dados criptografados, ou codificados, são conhecidos como texto cifrado e precisam de uma chave secreta para descriptografá-los. O navegador não pode executar códigos criptografados. A criptografia é um recurso de segurança, e não necessariamente reduz o tamanho de um arquivo.

- **Ofuscação:** Este processo é empregado a fim de ocultar a lógica comercial. O código é modificado de tal forma que se torna ilegível para os seres humanos. Isto torna a engenharia reversa difícil. A ofuscação é diferente da criptografia, pois os computadores ainda são capazes de entender e executar o código. A ofuscação é realizada alterando-se os nomes das variáveis, funções e membros. A redução do tamanho do arquivo resultante desse processo também melhora o desempenho, embora este não seja o objetivo principal da ofuscação.

- **Compactação:** A compactação de dados é um processo que reduz o número de bits necessários para representar os dados. A compactação de dados pode liberar espaço valioso em discos rígidos, acelerar a transferência de arquivos e diminuir os custos de largura de banda da rede. Alguns arquivos, como os arquivos do Microsoft Word, podem ser ter 90 por cento de seu tamanho original compactado.

### Por que os desenvolvedores não escrevem códigos minificados desde o início?

A minificação resulta em arquivos compactos, o que a torna uma prática recomendada de desempenho na web. Então, por que não escrever um código que já esteja minificado?

O código JavaScript é escrito para, e por, seres humanos, que precisam de espaço em branco, formatação e comentários para poder entender e depurar o código. Depois que o código for escrito, o software de minificação pode ser usado para melhorar o desempenho, uma vez que os navegadores podem executar o código sem precisar entendê-lo.

### Quais são as desvantagens da minificação?

A minificação pode separar scripts complicados devido às variáveis dependentes do site, como temas, plug-ins e ambiente de servidor. Além disso, a minificação deve ser feita em conjunto com outro ajuste de desempenho. Por si só, pode não proporcionar ganhos significativos. A minificação também pode introduzir erros difíceis de depurar.

Apesar dessas desvantagens, geralmente vale a pena tentar a minificação para obter possíveis ganhos de desempenho. Saiba como minificar o CSS também.

:arrow_right_hook: [link de referência](https://www.cloudflare.com/pt-br/learning/performance/why-minify-javascript-code/) | 
:arrow_right_hook: [link útil](https://www.uglifyjs.net/)
