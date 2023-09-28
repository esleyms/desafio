import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (!value) return null;
    if (!args || !args[0]) return value;
  
    const searchString = args[0].toLowerCase();
    return value.filter(function(item: any) {
      return JSON.stringify(item).toLowerCase().includes(searchString);
    });
  }
}
