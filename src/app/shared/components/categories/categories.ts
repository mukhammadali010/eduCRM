import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { ButtonComponent } from '../button/button';
import { Category } from '../models/categories.model';

@Component({
  selector: 'app-categories',
  imports: [CommonModule, MatSliderModule, ButtonComponent],
  templateUrl: './categories.html',
})
export class Categories {
  categories = signal<Category[]>([
    { name: 'Smartphones', count: 58 },
    { name: 'Laptops', count: 37 },
    { name: 'Tablets', count: 24 },
    { name: 'Smartwatches', count: 41 },
    { name: 'Headphones', count: 33 },
    { name: 'Monitors', count: 15 },
    { name: 'Keyboards & Mice', count: 29 },
    { name: 'Gaming Accessories', count: 19 },
    { name: 'Chargers & Cables', count: 22 },
  ]);

  min = signal<number>(0);
  max = signal<number>(5000);

  startPrice = signal<number>(300);
  endPrice = signal<number>(600);

  updateStart(event: Event) {
    const input = event.target as HTMLInputElement;
    this.startPrice.set(Number(input.value));
  }

  updateEnd(event: Event) {
    const input = event.target as HTMLInputElement;
    this.endPrice.set(Number(input.value));
  }

  displayFn(value: number): string {
    return `$${value}`;
  }
}
