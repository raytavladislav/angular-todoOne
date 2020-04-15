import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(data: any, search: string): any {
    if (!search) {
      return data; 
    }

    console.log(search);
    
    return data.filter(el => {
      // return el.title.toLowerCase().indexOf(search.toLowerCase()) > -1;

      let elem = el.title.toLowerCase().indexOf(search.toLowerCase())

      if(elem>-1) return true;
      else false;
    });
  }

}
