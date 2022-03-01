import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): unknown {
    return value.split('').reverse().join('');
  }

}

/* La forma en como aparece es la siguiente
transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

  Pero cambiamos a transform según lo que necesitemos. */
