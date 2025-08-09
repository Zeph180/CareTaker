import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
  ],
  templateUrl: './about.html',
  standalone: true,
  styleUrl: './about.css'
})
export class About {
  timeline = [
    {
      year: 1990,
      title: 'A New Beginning',
      description: 'Founded with a vision to provide compassionate and personalized elderly care, we started our journey dedicated to enhancing the lives of seniors.'
    },
    {
      year: 2000,
      title: 'Residence Expansion',
      description: 'We expanded our facilities to offer more comfortable living spaces, creating a welcoming home-like environment for more residents.'
    },
    {
      year: 2010,
      title: 'Home Care Services Launched',
      description: 'Introducing professional in-home care services to support seniors who prefer to stay in the comfort of their own homes.'
    },
    {
      year: 2020,
      title: 'Countrywide Coverage',
      description: 'Extended our reach to serve families across the country, bringing trusted care and support to more communities than ever before.'
    }
  ];

  careGivers = [
    { name: 'John Doe', role: 'Staff Designation', image: 'maleNurse.png' },
    { name: 'John Doe', role: 'Staff Designation', image: 'femaleNurse.png' },
    { name: 'John Doe', role: 'Staff Designation', image: 'maleNurse.png' },
    { name: 'John Doe', role: 'Staff Designation', image: 'femaleNurse.png' },
  ];
}
