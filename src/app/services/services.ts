import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  services = [
    {
      title: 'Resident Care',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem.',
      details: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac. Viverra donec nulls ut tellum pellenteum donec rhoncus dolor. Eu adipiscing molesta ut orci rhoncus ante blandum ac in. Augue non molestudis placerat faucibus nam purus sem.',
      offerings: [
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings'
      ]
    },
    {
      title: 'Elderly Nutrition',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem.',
      details: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac. Viverra donec nulls ut tellum pellenteum donec rhoncus dolor. Eu adipiscing molesta ut orci rhoncus ante blandum ac in. Augue non molestudis placerat faucibus nam purus sem.',
      offerings: [
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings'
      ]
    },
    {
      title: 'Skilled Nursing',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem.',
      details: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac. Viverra donec nulls ut tellum pellenteum donec rhoncus dolor. Eu adipiscing molesta ut orci rhoncus ante blandum ac in. Augue non molestudis placerat faucibus nam purus sem.',
      offerings: [
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings'
      ]
    },
    {
      title: 'Caring Staff',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem.',
      details: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac. Viverra donec nulls ut tellum pellenteum donec rhoncus dolor. Eu adipiscing molesta ut orci rhoncus ante blandum ac in. Augue non molestudis placerat faucibus nam purus sem.',
      offerings: [
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings',
        'Name of the Service Offerings'
      ]
    }
  ];

  dietaryServices = [
    {
      title: 'Meal Plan #1',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'diet1.jpg'
    },
    {
      title: 'Meal Plan #2',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'diet2.jpg'
    },
    {
      title: 'Meal Plan #3',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'diet3.jpg'
    }
  ];

  activities = [
    {
      title: 'Yoga',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'activity1.jpg'
    },
    {
      title: 'Board Games',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'activity2.jpg'
    },
    {
      title: 'Gardening',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'activity3.jpg'
    },
    {
      title: 'Indoor Games',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac.',
      image: 'activity4.jpg'
    }
  ];
}
