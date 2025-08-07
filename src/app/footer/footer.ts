import { Component } from '@angular/core';
import {literalMap} from '@angular/compiler';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    CommonModule,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  quickLinks = ['Home', 'About', 'Portfolio', 'Services'];
  legalLinks = ['Terms of Service', 'Privacy Policy'];
  socialLinks = [
    { icon: 'facebook', url: '#' },
    { icon: 'twitter', url: '#' },
    { icon: 'instagram', url: '#' },
    { icon: 'linkedin', url: '#' }
  ];
  protected readonly literalMap = literalMap;
}
