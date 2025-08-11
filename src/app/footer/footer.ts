import { Component } from '@angular/core';
import {literalMap} from '@angular/compiler';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './footer.html',
  standalone: true,
  styleUrl: './footer.css'
})
export class Footer {
  quickLinks = [
    { label: 'Home', route: '/', active: true },
    { label: 'About', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Contact Us', route: '/contact-us' }
  ];

  legalLinks = ['Terms of Service', 'Privacy Policy'];

  socialLinks = [
    { icon: 'facebook', url: '#' },
    { icon: 'x', url: '#' },
    { icon: 'instagram', url: '#' },
    { icon: 'linkedin', url: '#' }
  ];
  protected readonly literalMap = literalMap;
}
