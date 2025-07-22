import { Component, signal } from '@angular/core';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-footer',
  imports: [Logo],
  templateUrl: './footer.html',
})
export class Footer {
  footerData = signal({
    topSections: [
      {
        title: 'Custom PC Builds',
        description: 'We offer expert custom PC builds tailored for gaming, content creation, and productivity.',
        icon: 'https://img.icons8.com/ios-filled/50/computer-support.png',
      },
      {
        title: 'Hardware Consulting',
        description: 'Our team helps you pick the perfect components for your setup or upgrade needs.',
        icon: 'https://img.icons8.com/ios-filled/50/motherboard.png',
      },
      {
        title: 'Repair & Maintenance',
        description: 'We provide quick and reliable repair services for PCs, laptops, and peripherals.',
        icon: 'https://img.icons8.com/ios-filled/50/maintenance.png',
      },
      {
        title: 'Accessories & Peripherals',
        description: 'Wide range of accessories including mechanical keyboards, mice, and gaming monitors.',
        icon: 'https://img.icons8.com/ios-filled/50/headphones.png',
      },
    ],
    middleSection: ['123 Innovation Drive, Tech Valley, CA 94043', 'contact@techzone.com', '+1 (800) 123-4567'],
    bottomSections: [
      {
        icon: 'https://img.icons8.com/ios-filled/50/user.png',
        title: 'My Account',
        items: ['My Account', 'Our Stores', 'Contact Us', 'Career', 'Specials'],
      },
      {
        icon: 'https://img.icons8.com/ios-filled/50/help.png',
        title: 'Help & Guide',
        items: ['Help Center', 'How to Buy', 'Shipping & Delivery', 'Product Policy', 'How to Return'],
      },
      {
        icon: 'https://img.icons8.com/ios-filled/50/list.png',
        title: 'Categories',
        items: ['House Plants', 'Potter Plants', 'Seeds', 'Small Plants', 'Accessories'],
      },
      {
        icon: 'https://img.icons8.com/ios-filled/50/share.png',
        title: 'Social Media',
        items: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'],
      },
    ],
  });
}
