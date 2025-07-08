import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-promo-banner',
  imports: [],
  templateUrl: './promo-banner.html',
  styleUrl: './promo-banner.scss',
})
export class PromoBanner {
  src = signal('https://img.freepik.com/premium-psd/laptop-computer-promotional-social-media-poster_987701-1880.jpg');
}
