import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    let _limit = limit ? limit : 20;
    return value.slice(0, _limit);
  }
}
