# Símbolos para versionamentos

Em arquivos package.json, package-lock.json ou outro que especifique dependências, você pode encontrar os símbolos de **`^`** *(cincunflexo)* e **`~`** *(til)* antes do range (intervalo) de versão:
      
    "dependencies": {
        "basic-auth": "^2.0.1",
        "chalk": "^4.1.2",
        "corser": "^2.0.1",
        "he": "^1.2.0",
        "html-encoding-sniffer": "^3.0.0",
        "http-proxy": "^1.18.1",
        "mime": "^1.6.0",
        "minimist": "^1.2.6",
        "opener": "^1.5.1",
        "portfinder": "^1.0.28",
        "secure-compare": "3.0.1",
        "union": "~1.5.0",
        "url-join": "^4.0.1"
    },
      
## Entendendo cada parte:

- (~) - aproximadamente equivalente à versão
- (^) - compatível com a versão
- X.Y.Z (major.minor.patch) - juntos nesta ordem e formato, indicam o número de versão. Individualmente, X, Y e Z são identificadores de versão major (maior), minor (minor) e patch (correção) são categorias de número de versão
- ^X.Y.Z ou ~X.Y.Z - juntos nesta ordem e formato, formam ranges de versão. Ranges de versão especificam quais intervalos (de A até B, exceto B) de versões de uma dependência funcionarão no projeto

## Exemplos:

> Aproximadamente equivalente à versão (~): 

      "~1.5.0" 

- permite versões de 1.5.0 até 1.5.99 mas não inclui 1.6.0. As versões major e minor devem corresponder ao valor do identificador especificado, mas qualquer versão de patch maior ou igual à especificada é válida
- permite alterações do identificador de patch se uma versão no identificador minor corresponder ao especificado no comparador

> Compatível com a versão (^)

      "^4.0.1"

- permite alterações que não modifiquem o identificador que esteja mais à esquerda, aceitando atualizações minor e de patch para as versões 1.0.0 e superiores. Para versões que modificam apenas o patch, por exemplo ^0.0.1 o range permitido seria >=0.0.1 <0.0.2 , já que não podemos modificar o valor mais à esquerda, o 1
- o identificador mais à esquerda é o major. Qualquer versão minor ou de patch que seja maior ou igual ao especificado é válida. O ^ permitiria versões até 4.99.99 por exemplo mas, não permitira 5.0.0 porque o 4 é o dígito mais a esquerda em "^4.0.1"

### Ilustrando o que foi dito:

|Representação    | Significado     |
|---              |---              
|~1.2.3	      | >=1.2.3 <1.3.0	 
|^1.2.3	      | >=1.2.3 <2.0.0	 
|^0.2.3	      | >=0.2.3 <0.3.0	(0.x.x é especial)
|^0.0.1	      | =0.0.1	(0.0.x é especial)
|^1.2	            | >=1.2.0 <2.0.0	(asim como ^1.2.0)
|~1.2	            | >=1.2.0 <1.3.0	(assim como ~1.2.0)
|^1	            | >=1.0.0 <2.0.0	 

line
