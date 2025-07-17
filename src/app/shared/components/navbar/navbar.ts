import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { Search } from '../search/search';
import { Cart } from '../cart/cart';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-navbar',
  imports: [Logo, Search, Cart, ButtonComponent],
  templateUrl: './navbar.html',
})
export class Navbar {}
