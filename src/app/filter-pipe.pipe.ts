import { Pipe, PipeTransform } from '@angular/core';
import { Iplayer } from './shared/models/data';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Iplayer[], searchText : string):Iplayer[] {
    if(!value){
      return []
    }
    if(!searchText){
      return value
    }
    let filterArray = value.filter(playerObj=>{
      return playerObj.country.toLocaleLowerCase().trim().startsWith(searchText.toLocaleLowerCase().trim())
    })
    return filterArray
  }

}
