import { Component, computed, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Card } from '../../shared/components/card/card';
import { InputComponent } from '../../shared/components/input/input';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/components/button/button';
import { FormsModule } from '@angular/forms';
import { Options, Product } from '../../shared/components/models/cards-blok.model';

@Component({
  selector: 'app-cards-blok',
  imports: [MatTabsModule, Card, InputComponent, MatIconModule, ButtonComponent, FormsModule],
  templateUrl: './cards-blok.html',
})
export class CardsBlok {
  options = signal<Options[]>([
    { label: 'Newest First', value: 'newest' },
    { label: 'Price: Low to High', value: 'price-asc' },
    { label: 'Price: High to Low', value: 'price-desc' },
    { label: 'Popularity', value: 'popularity' },
    { label: 'Rating: High to Low', value: 'rating-desc' },
    { label: 'Rating: Low to High', value: 'rating-asc' },
    { label: 'Name: A to Z', value: 'name-asc' },
    { label: 'Name: Z to A', value: 'name-desc' },
  ]);

  products = signal<Product[]>([
    {
      name: 'MacBook Pro 16"',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'iPhone 15 Pro Max',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1571030360181-3487981ec83f?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Samsung Galaxy Tab S9',
      price: 799,
      discountPrice: 699,
      discountLabel: '13% OFF',
      image: 'https://images.unsplash.com/photo-1554435493-93422d4c3caa?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sony WH-1000XM5 Headphones',
      price: 399,
      image: 'https://images.unsplash.com/photo-1580894741666-82f73415f5d2?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Apple Watch Series 9',
      price: 499,
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Dell UltraSharp Monitor',
      price: 699,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b82b5f6?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Logitech MX Master 3',
      price: 99,
      image: 'https://images.unsplash.com/photo-1587825140400-13e9fdc6c2f5?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Anker Fast Charger',
      price: 29,
      image: 'https://images.unsplash.com/photo-1615887220493-0cb92344b14e?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Samsung SSD 1TB',
      price: 159,
      image: 'https://images.unsplash.com/photo-1587202372775-e8f5c4731181?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Samsung SSD 1TB',
      price: 159,
      image: 'https://images.unsplash.com/photo-1587202372775-e8f5c4731181?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Samsung SSD 1TB',
      price: 159,
      image: 'https://images.unsplash.com/photo-1587202372775-e8f5c4731181?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Samsung SSD 1TB',
      price: 159,
      image: 'https://images.unsplash.com/photo-1587202372775-e8f5c4731181?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Samsung SSD 1TB',
      price: 159,
      image: 'https://images.unsplash.com/photo-1587202372775-e8f5c4731181?auto=format&fit=crop&w=800&q=80',
    },
  ]);

  selectedSort = signal<string>('newest');

  onFilterChange(option: string) {
    this.selectedSort.set(option);
  }

  filteredProducts = computed(() => {
    const products = [...this.products()];
    const sortBy = this.selectedSort();

    switch (sortBy) {
      case 'price-asc':
        return products.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return products.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return products.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return products;
    }
  });

  currentPage = signal(1);
  itemsPerPage = 9;

  totalPages = computed(() => {
    return Math.ceil(this.filteredProducts().length / this.itemsPerPage);
  });

  paginatedProducts = computed(() => {
    const start = (this.currentPage() - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.filteredProducts().slice(start, end);
  });

  nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(p => p + 1);
    }
  }

  prevPage() {
    if (this.currentPage() > 1) {
      this.currentPage.update(p => p - 1);
    }
  }
}
