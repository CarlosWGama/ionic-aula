import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataBrasil',
})
export class DataBrasilPipe implements PipeTransform {

  transform(value: string, ...args) {
    let datas = value.split('-');
    return datas[2]+"/"+datas[1]+"/"+datas[0];
  }
}
