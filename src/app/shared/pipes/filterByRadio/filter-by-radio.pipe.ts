import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByRadio'
})
export class FilterByRadioPipe implements PipeTransform {

  transform(data: any, radioSearch: string): any {

        if (!radioSearch) {
          return data
        }
    
        return data.filter(el => {
    
          if (el.priority.toLowerCase().indexOf(radioSearch.toLocaleLowerCase()) > -1) {
            return data;
          } 
    
          else if (radioSearch == "all") {
            return data;
          }
          
        });
      }
    }
    

// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filterByRadio'
// })

// export class FilterByRadioPipe implements PipeTransform {

//   transform(data: any, radioSearch: string): any {

//     if (!radioSearch) {
//       return data
//     }

//     return data.filter(el => {

//       if (el.priority.toLowerCase().indexOf(radioSearch.toLocaleLowerCase()) > -1) {
//         return data;
//       } 

//       else if (radioSearch == "all") {
//         return data;
//       }
      
//     });
//   }
// }
