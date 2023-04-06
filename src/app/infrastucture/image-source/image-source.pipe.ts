import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageSource',
})
export class ImageSourcePipe implements PipeTransform {
  transform(value: string, size = 'https://image.tmdb.org/t/p/w440_and_h660_face'): string {
    return `${size}${value}`;
  }
}
