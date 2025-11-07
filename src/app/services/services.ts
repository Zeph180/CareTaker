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
      title: 'Personal Care and Companionship',
      description: 'Support with daily living activities and meaningful companionship to enhance comfort, independence, and emotional well-being.',
      details: 'Our personal care and companionship services are designed to help seniors maintain their dignity and independence while receiving assistance with essential daily activities. Whether it’s help with bathing, dressing, or simply sharing a warm conversation over a cup of tea, our caregivers build trust and provide a sense of connection and belonging.',
      offerings: [
        'Assistance with bathing, grooming, and hygiene',
        'Medication reminders and health monitoring',
        'Mobility support and fall prevention',
        'Meal assistance and hydration support',
        'Emotional support and social interaction'
      ]
    },
    {
      title: 'Meal Planning and Preparations',
      description: 'Nutritious, customized meal preparation tailored to individual health needs, dietary preferences, and cultural tastes.',
      details: 'Proper nutrition is key to healthy aging. Our caregivers work closely with clients and families to prepare fresh, delicious meals that meet dietary requirements and taste preferences. We take the stress out of planning and cooking, making mealtime safe, enjoyable, and nourishing.',
      offerings: [
        'Customized meal planning based on dietary needs',
        'Grocery shopping and pantry organization',
        'Freshly prepared, home-cooked meals',
        'Monitoring food intake and hydration',
        'Encouraging safe and enjoyable eating habits'
      ]
    },
    {
      title: 'Light House Cleaning',
      description: 'Maintaining a safe, clean, and organized home environment that promotes comfort, hygiene, and peace of mind.',
      details: 'A tidy home contributes significantly to overall well-being. Our light housekeeping services ensure that seniors live in a clutter-free and safe space, reducing fall risks and creating a welcoming atmosphere. From laundry to kitchen tidying, we help maintain the heart of the home.',
      offerings: [
        'Dusting, vacuuming, and surface cleaning',
        'Laundry and linen changes',
        'Kitchen and bathroom tidying',
        'Dishwashing and trash removal',
        'Organization of living spaces for safety'
      ]
    },
    {
      title: 'Hospice Care',
      description: 'Compassionate end-of-life support focused on dignity, comfort, and emotional well-being for both clients and their families.',
      details: 'Our hospice care services provide comfort and support during life’s final journey. Working alongside hospice nurses and medical teams, we offer physical assistance, emotional presence, and a calming environment, ensuring that your loved one’s final days are peaceful and dignified.',
      offerings: [
        'Personal care during end-of-life stages',
        'Emotional and spiritual support',
        'Comfort-focused companionship',
        'Family respite and caregiver relief',
        'Support with hospice coordination'
      ]
    }
  ];

  dietaryServices = [
    {
      title: 'Ambulation',
      description: 'We provide gentle assistance with walking and movement to help seniors maintain mobility, prevent falls, and encourage independence both indoors and outdoors.',
      image: 'ambulation.jpg'
    },
    {
      title: 'Bathing and Dressing',
      description: 'Our caregivers offer respectful and discreet support with personal hygiene, including bathing, grooming, and dressing — promoting dignity and daily comfort.',
      image: 'bathing.jpg'
    },
    {
      title: 'Lively Conversations',
      description: 'We believe companionship is vital. Engaging in meaningful conversation reduces feelings of isolation and supports emotional well-being for our seniors.',
      image: 'conversation.jpg'
    },
    {
      title: 'Driving to Doctor',
      description: 'We ensure your loved one gets to medical appointments, therapy sessions, and errands safely and on time — reducing stress for both clients and families.',
      image: 'drivingToDoctor.jpg'
    },
    {
      title: 'Nutrition',
      description: 'Our team ensures every meal is balanced, delicious, and aligned with medical or dietary needs — supporting overall health, energy, and quality of life.',
      image: 'nutritional-needs.jpg'
    },
    {
      title: 'Lively Conversations',
      description: 'We believe companionship is vital. Engaging in meaningful conversation reduces feelings of isolation and supports emotional well-being for our seniors.',
      image: 'companion.jpg'
    }
  ];

  activities = [
    {
      title: 'Yoga',
      description: 'Gentle yoga sessions designed for seniors help improve flexibility, balance, and breathing. They also reduce stress and promote relaxation in a calm, supportive environment.',
      image: 'yoga.jpg'
    },
    {
      title: 'Board Games',
      description: 'Board games stimulate the mind, encourage friendly competition, and provide opportunities for social bonding. They’re a fun way to keep memory sharp and spirits high.',
      image: 'boardgames.avif'
    },
    {
      title: 'Gardening',
      description: 'Gardening offers physical activity, a connection to nature, and a sense of accomplishment. Whether planting flowers or picking herbs, it’s soothing and joyful.',
      image: 'littleGarden.jpg'
    }
  ];
}
