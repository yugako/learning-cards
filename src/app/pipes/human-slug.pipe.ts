import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'humanSlug'
})
export class HumanSlugPipe implements PipeTransform {

  transform(value: string | null = ''): string {
    return value ? value.split('-').map(v => v[0].toUpperCase() + v.slice(1)).join(' ') : '';
  }
}
