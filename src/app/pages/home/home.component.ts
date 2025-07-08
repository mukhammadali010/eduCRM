import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { CartComponent } from '../../shared/components/cart/cart.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { Categories } from '../../shared/components/categories/categories';
import { PromoBanner } from '../../shared/components/promo-banner/promo-banner';
import { MatTabsModule } from '@angular/material/tabs';
import { CardsBlok } from '../../features/cards-blok//cards-blok';
@Component({
  selector: 'app-home',
  imports: [
    LogoComponent,
    SearchComponent,
    CartComponent,
    ButtonComponent,
    CarouselComponent,
    Categories,
    PromoBanner,
    MatTabsModule,
    CardsBlok,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
