# keyvalue (pipe) 

Transforma um **`Objeto`** ou **`Mapa`** em uma matriz de pares de chave-valor.

    ex1: {[key: number]: string} = {
      2: 'foo', 
      1: 'bar'
    };

    ex2: {[key: string]: string} = {
      id: '00001',
      name: 'Fulano'
    }
    
    <div *ngFor="let item of ex1 | keyvalue">
      {{item.key}}: {{item.value}}
    </div>
    
    <div *ngFor="let item of ex2 | keyvalue">
      {{item.key}}: {{item.value}}
    </div>

# forkjoin services ... coming soon !!!

### of operator rxjs ...
