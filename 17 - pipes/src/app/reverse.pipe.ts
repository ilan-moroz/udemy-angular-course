import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    const splitString = value.split('');
    const reverseString = splitString.reverse();
    const joinString = reverseString.join('');
    return joinString;
  }
}
