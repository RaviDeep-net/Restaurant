import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../entities/product.entity';

@Pipe({
  name: 'sumPipe'
})
export class SumPipePipe implements PipeTransform {

  transform(value: any, limit: number) {
    console.log('value='+value +' limit= '+limit);
    console.log('Total sum= '+value*limit);
    //  return value*limit;
  }

}
