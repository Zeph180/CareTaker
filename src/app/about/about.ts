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
    {
      name: 'John Doe',
      role: 'Senior Care Nurse',
      image: 'maleNurse.png',
      description: 'Experienced and compassionate nurse dedicated to providing personalized care and support to our residents.'
    },
    {
      name: 'John Doe',
      role: 'Certified Nursing Assistant',
      image: 'femaleNurse.png',
      description: 'Committed to ensuring comfort and dignity through attentive daily assistance and companionship.'
    },
    {
      name: 'John Doe',
      role: 'Physical Therapy Aide',
      image: 'maleNurse.png',
      description: 'Supports rehabilitation programs with patience and expertise to promote resident mobility and wellness.'
    },
    {
      name: 'John Doe',
      role: 'Resident Care Coordinator',
      image: 'femaleNurse.png',
      description: 'Organizes care plans and collaborates closely with families to ensure the highest standard of care.'
    },
  ];
}
