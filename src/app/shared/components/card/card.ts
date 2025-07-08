import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  name = input<string>('');
  price = input<number>();
  discountPrice = input<number>();
  discountLabel = input<string>();
  image = input<string>();
}
