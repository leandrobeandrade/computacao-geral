# Sintaxe para Template

#### Vincula `(bind)` o valor de uma propriedade ao resultado da expressão firstName.
    
    <input [value]="firstName">
    
#### Os vínculos (binds) atribuem `role` ao resultado da expressão firstName.

    <div [attr.role]="firstName">

#### Vincula a presença da classe CSS `extra-sparkle` no elemento à veracidade da expressão isDelightful.

    <div [class.extra-sparkle]="isDelightful">

#### Vincula a largura da propriedade de estilo ao resultado da expressão mySize em pixels. As unidades são opcionais.

    <div [style.width.px]="mySize">

#### Chama o método readRainbow quando um evento de clique é disparado neste elemento de botão (ou seus filhos) e passa no objeto de evento.

    <button (click)="readRainbow ($event)">

#### Vincula uma propriedade a uma string interpolada, por exemplo, "Hello Seabiscuit". Equivalente a: <div [title]="'Hello' + ponyName">
    
    <div title="Hello {{ponyName}}">

#### Vincula o conteúdo de texto a uma string interpolada, por exemplo, "Hello Seabiscuit".
    
    <p> Olá {{ponyName}} </p>

#### Configura a vinculação de dados bidirecional. Equivalente a: <my-cmp [title]="name" (titleChange)="name = $event">
    
    <meu-cmp [(title)]="name">

#### Cria uma variável local `movieplayer` que fornece acesso à instância do elemento de vídeo em expressões de vinculação de dados e de evento no modelo atual.

    <video #movieplayer ...>
        <button (click)="movieplayer.play()">
    </video>

#### O símbolo `*` transforma o elemento atual em um modelo embutido. Equivalente a: <ng-template [myDirective]="myExpression"> ... </ng-template>

    <p *myDirective="myExpression"> ... </p>

#### Transforma o valor atual da expressão cardNumber por meio do pipe denominado myCardNumberFormatter.

    <p>Card No.: {{cardNumber | myCardNumberFormatter}}</p>

#### O operador de navegação segura `?` significa que o campo do empregador é opcional e, se indefinido, o restante da expressão deve ser ignorado.

    <p>Employer: {{employer?.companyName}}</p>

#### Um modelo de snippet SVG precisa de um prefixo svg: em seu elemento raiz para remover a ambigüidade do elemento SVG de um componente HTML.

    <svg: rect x = "0" y = "0" width = "100" height = "100" />

#### Um elemento raiz `<svg>` é detectado como um elemento SVG automaticamente, sem o prefixo.
    
    <svg>
        <rect x = "0" y = "0" largura = "100" altura = "100" />
    </svg>
