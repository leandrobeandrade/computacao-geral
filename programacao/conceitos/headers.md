# Headers

Cabeçalhos Http são utilizados para permitir a comunicação de/entre aplicações que estão hospedadas em domínios diferentes. São compostos por metadados que fazem o controle das permissões, definindo o acesso ao dados, caso contrário causará erros relacionados a CORS.

#### - ACCESS-CONTROL-ALLOW-ORIGIN

Define quais origens estão autorizadas a acessar os dados

#### - ACCESS-CONTROL-ALLOW-HEADERS

Define quais headers personalizados o navegador pode trafegar

#### - ACCESS-CONTROL-ALLOW-METHODS

Define quais métodos/verbos http poderão ser utilizados, GET, POST, etc...

#### - ACCESS-CONTROL-ALLOW-CREDENTIALS

Define a utilização de cookies pela aplicação, se presente limita o uso do operador * em Allow-Origin

#### - ACCESS-CONTROL-MAX-AGE

Define o tempo de cache para requisições que utilizam OPTIONS (preflight), sem este cabeçalho o navegador faz preflight a todo momento consumindo recursos
