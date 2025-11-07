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
      year: 1,
      title: 'In the beginning...',
      description: 'Quinn began her journey as a compassionate, dedicated, and committed caregiver—someone who quickly became ' +
        'loved and trusted by every individual and family she served. Her warmth, reliability, and genuine care stood out during ' +
        'every visit, whether in private homes or within hospital and healthcare settings'
    },
    {
      year: 2,
      title: 'Growth',
      description: 'Over the years, Quinn gained extensive hands-on experience, supporting people with diverse needs across different' +
        ' environments. Her deep passion for caregiving and her desire to make a meaningful difference inspired her to take the next step—founding this agency.'
    },
    {
      year: 3,
      title: 'Why the agency?',
      description: 'With a heart rooted in service, Quinn created this agency to extend the same level of care, dignity, and compassion ' +
        'she has always provided—now with a broader reach. Her mission is to ensure that everyone in need of care receives the support, ' +
        'attention, and respect they deserve. Quinn’s Care Bridge Health Services was born from that vision. What started as one woman’s ' +
        'calling to care for others grew into a team of like-minded, skilled caregivers who share her values of compassion, dignity, and respect.\n' +
        'From its very first days, the agency set out to “bridge the gap” between medical needs and emotional well-being—offering not just practical ' +
        'support, but also companionship, encouragement, and peace of mind. Quinn carefully selected every member of her team, ensuring they embodied ' +
        'the same empathy, reliability, and dedication that defined her own work.\n'
    },
    {
      year: 4,
      title: 'Our Coverage!',
      description: 'Today, Quinn’s Care Bridge Health Services serves individuals and families across the community, ' +
        'delivering personalized care that meets each client’s unique needs. Guided by Quinn’s original promise—to treat' +
        ' every person like family—the agency continues to touch lives, one heartfelt connection at a time.'
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
