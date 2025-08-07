import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
  ],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  timeline = [
    {
      year: 1990,
      title: 'New Beginning',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac. Viverra donec nulls ut tellum pellenteum donec rhoncus dolor. Eu adipiscing molesta ut orci rhoncus ante blandum ac in. Augue non molestudis placerat faucibus nam purus sem.'
    },
    {
      year: 2000,
      title: 'Residence Expand',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac. Viverra donec nulls ut tellum pellenteum donec rhoncus dolor. Eu adipiscing molesta ut orci rhoncus ante blandum ac in. Augue non molestudis placerat faucibus nam purus sem.'
    },
    {
      year: 2010,
      title: 'Home Care Service Started',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac. Viverra donec nulls ut tellum pellenteum donec rhoncus dolor. Eu adipiscing molesta ut orci rhoncus ante blandum ac in. Augue non molestudis placerat faucibus nam purus sem.'
    },
    {
      year: 2020,
      title: 'Country Wide Coverage',
      description: 'Lorem ipsum dolor sit amet consectetur. Augue non molestudis placerat faucibus nam purus sem. Urna purus porttitor dignissim congue pellentesque ac hac. Viverra donec nulls ut tellum pellenteum donec rhoncus dolor. Eu adipiscing molesta ut orci rhoncus ante blandum ac in. Augue non molestudis placerat faucibus nam purus sem.'
    }
  ];
  careGivers = [
    { name: 'John Doe', role: 'Staff Designation', image: 'maleNurse.png' },
    { name: 'John Doe', role: 'Staff Designation', image: 'femaleNurse.png' },
    { name: 'John Doe', role: 'Staff Designation', image: 'maleNurse.png' },
    { name: 'John Doe', role: 'Staff Designation', image: 'femaleNurse.png' },
    { name: 'John Doe', role: 'Staff Designation', image: 'maleNurse.png' },
    { name: 'John Doe', role: 'Staff Designation', image: 'femaleNurse.png' },
    { name: 'John Doe', role: 'Staff Designation', image: 'femaleNurse.png' },
    { name: 'John Doe', role: 'Staff Designation', image: 'maleNurse.png' }
  ];
}
