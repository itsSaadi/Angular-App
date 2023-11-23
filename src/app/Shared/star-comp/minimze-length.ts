import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, maxLength: number = 100): string {
    if (!value) return '';

    // Check if the length of the value is greater than maxLength
    if (value.length > maxLength) {
      // Truncate the text and append '...' at the end
      return value.substring(0, maxLength) + '...';
    }

    return value;
  }
}