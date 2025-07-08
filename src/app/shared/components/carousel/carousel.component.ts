import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  slides = [
    {
      title: 'UPGRADE YOUR LIFE WITH THE LATEST',
      highlight: 'TECH',
      desc: 'Explore our exclusive range of smartphones, laptops, tablets and gadgets — designed to keep you ahead in the digital world.',
      image: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg',
    },
    {
      title: 'DISCOVER SMARTER',
      highlight: 'LIFESTYLE',
      desc: 'Shop cutting-edge tech, from wireless earbuds to smartwatches, and turn your everyday into something smarter.',
      image: 'https://images.unsplash.com/photo-1734441996803-6fe7d41491db?q=80&w=1035&auto=format&fit=crop',
    },
    {
      title: 'YOUR FUTURE DESERVES',
      highlight: 'POWER',
      desc: 'Get performance-driven laptops and high-end smartphones for work, play, and everything in between — all in one place.',
      image: 'https://images.unsplash.com/photo-1697545806245-9795b6056141?q=80&w=1674&auto=format&fit=crop',
    },
  ];

  activeIndex = signal(0);
  typedTitle = signal('');
  typedHighlight = signal('');

  constructor() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    setInterval(() => {
      const next = (this.activeIndex() + 1) % this.slides.length;
      this.activeIndex.set(next);
    }, 7000);
  }

  setIndex(index: number) {
    this.activeIndex.set(index);
  }
}
