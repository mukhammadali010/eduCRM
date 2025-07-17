import { Component } from '@angular/core';
import { Carousel } from '../../shared/components/carousel/carousel';
import { Categories } from '../../shared/components/categories/categories';
import { PromoBanner } from '../../shared/components/promo-banner/promo-banner';
import { MatTabsModule } from '@angular/material/tabs';
import { CardsBlok } from '../../features/cards-blok//cards-blok';
import { Navbar } from '../../shared/components/navbar/navbar';
@Component({
  selector: 'app-home',
  imports: [Carousel, Categories, PromoBanner, MatTabsModule, CardsBlok, Navbar],
  templateUrl: './home.html',
})
export class Home {}
