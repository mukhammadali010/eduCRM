import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-carousel-page',
  imports: [MatIconModule],
  templateUrl: './carousel-page.html',
})
export class CarouselPage {
  label = input<string>('');
  title = input<string>('');
  titleChild = input<string>('');
  text = input<string>('');
  imageUrl = input<string>('');
}
