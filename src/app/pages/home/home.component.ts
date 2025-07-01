import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { SearchComponent } from '../../shared/components/search/search.component';
import { CartComponent } from '../../shared/components/cart/cart.component';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-home',
  imports: [LogoComponent, SearchComponent, CartComponent, ButtonComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
