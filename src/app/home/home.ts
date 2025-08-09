import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  standalone: true,
  styleUrl: './home.css'
})
export class Home {
  services = [
    {
      icon: 'resident-care',
      title: 'Resident Care',
      description: 'Personalized daily assistance in a warm, homelike environment. From grooming to companionship, we ensure every resident feels valued and cared for.'
    },
    {
      icon: 'elderly-nutrition',
      title: 'Elderly Nutrition',
      description: 'Nutritious, chef-prepared meals tailored to individual health needs, promoting wellness, energy, and enjoyment at every mealtime.'
    },
    {
      icon: 'skilled-nursing',
      title: 'Skilled Nursing',
      description: 'Professional medical support delivered with compassion, ensuring residents receive expert care for both short-term recovery and long-term health.'
    }
  ];

  reviews = [
    {
      text: 'Quin’s Care has been a blessing for our family. The staff treat my mother with such kindness and respect,' +
        ' and she feels truly at home here. Their attention to detail, from her daily care to the little moments of joy, ' +
        'gives me peace of mind every day.',
      author: 'James Smith',
      role: 'Son Of Clarence'
    }
  ];
}
