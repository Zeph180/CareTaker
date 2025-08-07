import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  services = [
    {
      icon: 'resident-care',
      title: 'Resident Care',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudris placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.'
    },
    {
      icon: 'elderly-nutrition',
      title: 'Elderly Nutrition',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudris placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.'
    },
    {
      icon: 'skilled-nursing',
      title: 'Skilled Nursing',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudris placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.'
    },
    {
      icon: 'caring-staff',
      title: 'Caring Staff',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudris placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.'
    }
  ];

  reviews = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur. Amet ied tellus elementum neque. Lorem molestud aput tellus risus quis nam turpis natoque ullamcor. Adipiscing pellentesque ut tortor eorum et pulvinar nullam. Porttitor lacus sit amet mi consectetur nullam commodo tellus lorem.',
      author: 'James Smith',
      role: 'Son Of Clarence'
    }
  ];
}
