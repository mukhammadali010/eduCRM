import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Login } from '../login/login';
import { Register } from '../register/register';
@Component({
  selector: 'app-modal',
  imports: [Login, Register],
  templateUrl: './modal.html',
  styles: ``,
})
export class Modal {
  data = inject(MAT_DIALOG_DATA);

  activeTab = signal<'login' | 'register'>('register');

  setTab(tab: 'login' | 'register') {
    this.activeTab.set(tab);
  }
}
