import { Pipe, PipeTransform } from '@angular/core';
import {MOCKITEMS} from './mock-items';

@Pipe({
  name: 'myNewPipe',
  pure: false
})
export class MyNewPipePipe implements PipeTransform {
  //transform is the only method?
  transform(items: any,show): any {
    if(show === 'active'){
      return items.filter(item => !item.completed);
    }
    else if(show === 'completed'){
      return items.filter(item => item.completed);
    }
    else{
      return items;
    }
  }

}
