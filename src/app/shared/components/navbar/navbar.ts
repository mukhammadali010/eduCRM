import { Component, inject } from '@angular/core';
import { Logo } from '../logo/logo';
import { Search } from '../search/search';
import { Cart } from '../cart/cart';
import { ButtonComponent } from '../button/button';
import { MatDialog } from '@angular/material/dialog';
import { Modal } from '../../../features/auth/modal/modal';

@Component({
  selector: 'app-navbar',
  imports: [Logo, Search, Cart, ButtonComponent],
  templateUrl: './navbar.html',
})
export class Navbar {
  dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(Modal, {
      data: {
        animal: 'panda',
      },
    });
  }
}
