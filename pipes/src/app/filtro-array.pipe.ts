import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(val: any, args?: any): any {

    if(val.length === 0 || args === undefined) {
      return val;
    }

    let filtro = args.toLocaleLowerCase();
    return val.filter(
      v => v.toLocaleLowerCase().indexOf(filtro) != -1
    );    
  }

}
