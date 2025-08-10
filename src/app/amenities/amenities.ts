import { Component } from '@angular/core';

@Component({
  selector: 'app-amenities',
  imports: [],
  templateUrl: './amenities.html',
  styleUrl: './amenities.css'
})
export class Amenities {

    indoorActivities = [
    {
      title: 'Private Rooms',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'privateRooms.png'
    },
    {
      title: 'Semi-Private Rooms',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'semiPrivateRooms.png'
    },
  ];

    outdoorActivities = [
    {
      title: 'outdoorSpaces',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'outdoorSpaces.png'
    },
    {
      title: 'gardens',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'gardens.jpg'
    },
  ];

    commonAreas = [
    {
      title: 'outdoorSpaces',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'common1.png'
    },
    {
      title: 'gardens',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'common2.png'
    },
  ];

  accessibility = [
    {
      icon: 'houseIcon.svg',
      title: 'Accessibility Features #1',
      description: 'Personalized daily assistance in a warm, homelike environment. From grooming to companionship, we ensure every resident feels valued and cared for.'
    },
    {
      icon: 'houseIcon.svg',
      title: 'Accessibility Features #2',
      description: 'Nutritious, chef-prepared meals tailored to individual health needs, promoting wellness, energy, and enjoyment at every mealtime.'
    },
    {
      icon: 'houseIcon.svg',
      title: 'Accessibility Features #3',
      description: 'Professional medical support delivered with compassion, ensuring residents receive expert care for both short-term recovery and long-term health.'
    }
  ];
}
