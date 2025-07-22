import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { CarouselPage } from '../carousel-page/carousel-page';
import { ButtonComponent } from '../button/button';

register();

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselPage, ButtonComponent],
  templateUrl: './carousel.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Carousel {
  carouselItems = signal([
    {
      label: 'Welcome to TechZone',
      title: 'MacBook',
      titleChild: 'Pro',
      text: 'Now available at the best price',
      buttonLabel: 'Buy now',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/apple-606761_1280.jpg',
    },
    {
      label: 'Discover the Future',
      title: 'iPhone',
      titleChild: '15 Pro Max',
      text: 'Smartphone with incredible camera and performance',
      buttonLabel: 'Order now',
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    },
    {
      label: 'Boost Your Productivity',
      title: 'iPad',
      titleChild: 'Air 5',
      text: 'Lightweight, powerful and perfect for work and play',
      buttonLabel: 'Shop now',
      imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    },
  ]);
}
