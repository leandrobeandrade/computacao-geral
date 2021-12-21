# keyvalue (pipe) 

Transforma um **`Objeto`** ou **`Mapa`** em uma matriz de pares de chave-valor. Onde se a chave for number é feito a ordenação:

    ex1: {[key: number]: string} = {
      2: 'foo', 
      1: 'bar'
    };

    ex2: {[key: string]: any} = {
      id: 1,  
      name: 'Fulano'
    }
    
    map = new Map([[2, 'foo'], [1, 'bar']]);
    
    
    Objeto
    <div *ngFor="let item of ex1 | keyvalue">
      { {item.key }}: {{ item.value }}                   1: bar, 2: foo
    </div>
    
    <div *ngFor="let item of ex2 | keyvalue">
      {{ item.key }}: {{ item.value }}                   id: 1, name: 'Fulano' 
    </div>
    
    Map
    <div *ngFor="let item of map | keyvalue">
      {{ item.key }}: {{ item.value }}                   id: bar, 2: foo
    </div>







