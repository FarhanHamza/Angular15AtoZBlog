import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isActivePipe'
})
export class IsActivePipe implements PipeTransform {

  transform(value: boolean) {
    return value ? "Yes" : "No";
  }

}
