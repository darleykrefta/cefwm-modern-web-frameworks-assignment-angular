import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'money' })
export class MoneyPipe implements PipeTransform {
  transform(
    value: number,
    locale: string = 'pt-br',
    currency: string = 'BRL'
  ): string {
    var formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    });
    return formatter.format(value);
  }
}
