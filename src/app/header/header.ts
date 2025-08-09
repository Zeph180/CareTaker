import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './header.html',
  standalone: true,
  styleUrl: './header.css'
})
export class Header {
  navItems = [
    { label: 'Home', route: '/', active: true },
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Amenities', route: '/amenities' },
    { label: 'Contact Us', route: '/contact-us' }
  ];
}
