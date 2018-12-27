import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(val: any, args?: any): any {
    let valores = val.split(' ');
    let result = '';

    for(let v of valores) {
      result += this.capitaliza(v) + ' ';
    }

    return result;
  }

  capitaliza(valor: string) {
    return valor.substr(0,1).toUpperCase() + valor.substr(1).toLowerCase();
  }

}
