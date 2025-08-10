import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule
  ],
  templateUrl: './header.html',
  standalone: true,
  styleUrl: './header.css'
})
export class Header {
  isMenuOpen: boolean = false;
  navItems = [
    { label: 'Home', route: '/', active: true },
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Amenities', route: '/amenities' },
    { label: 'Contact Us', route: '/contact-us' }
  ];


  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
