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
    // {
    //   text: 'We had the pleasure of working with Quinn’s Care bridge as our full-time caregiving Agency and we met  ' +
    //     'Angela who was the best  in care giving . She knows what she\'s doing and is remarkably intelligent. ' +
    //     'Angela has the ability to size up a problem and knows how to fix it. She is quick thinking and on the ball.' +
    //     'Angela\'s kindness, decency and patience are her strong points.' +
    //     'Angela\'s personality exudes positive energy. I can\'t stress enough how patient and knowledgeable she is. She loves to interact with her patients.' +
    //     'She has a strong command of languages. She learns fast and you will never regret having her as your care giver.',
    //   author: 'Jerry',
    //   role: 'Brandeis University'
    // },
    // {
    //   text: 'When I returned to Boston for medical care after a fall in Florida due to my Parkinson\'s Disease, I was wheelchair bound. ' +
    //     'I was fortunate to have Quinn’s Care Bridge as my caring Agency, The home health aides were excellent and truly remarkable in the care they provided for me. ' +
    //     'The team is a standout in every respect. They are always positive, full of energy and eager to help. They are bright, ' +
    //     'sensitive, and perceptive and adapts quickly to my daily routine soon anticipating my needs. They have my admiration and' +
    //     ' respect and high praise for their attitude and  ability',
    //   author: 'Burke',
    //   role: 'Boston'
    // },
    {
      text: 'Their team of caregivers is not only well-trained and skilled but also genuinely dedicated to the well-being of those they serve. ' +
        'They approach every situation with patience, respect, and kindness, ensuring that clients feel valued and supported.We enjoyed Having Sharon and Angie.',
      author: 'Robinson',
      role: 'Winchester MA'
    },
    {
      text: 'What sets Quinn’s care Bridge apart is their attention to detail and their ability to tailor care plans to meet individual needs. ' +
        'They maintain clear communication with families, respond promptly to concerns, and go above and beyond to create a safe and nurturing environment.',
      author: 'Bob',
      role: 'Lexington MA'
    },
    {
      text: 'Their team of caregivers is not only well-trained and skilled but also genuinely dedicated to the well-being of those they serve. ' +
        'They approach every situation with patience, respect, and kindness, ensuring that clients feel valued and supported.We enjoyed Having Sharon and Angie.',
      author: 'Robinson',
      role: 'Winchester MA'
    },
    {
      text: 'I have full confidence in their ability to provide excellent caregiving services, ' +
        'and I would not hesitate to recommend them to anyone seeking compassionate, dependable, and professional care',
      author: 'Jean',
      role: 'Wakefield MA'
    },
    {
      text: 'The caregivers from treated my mother like family. Their kindness and patience made all the difference in her daily life.”They are ' +
        'Reliable, compassionate, and professional  . The agency and their care givers gave us peace of mind knowing our father was in safe hands',
      author: 'Dr Rolland',
      role: 'Newton MA'
    },
    {
      text: 'They don’t just provide care; they bring comfort, dignity, and joy to their clients. ' +
        'I’m so grateful for their service.',
      author: 'Ruth',
      role: 'Lexington MA'
    },
    {
      text: 'From day one, Quinn’s care bridge went above and beyond. ' +
        'They truly listen and adapt to the needs of their clients.”' +
        ' My dad was always happy when Angela arrived , ' +
        '“there is now light in the house”because Angie was in. All care givers we had were wonderful',
      author: 'Davis',
      role: 'Cambridge MA'
    },
    {
      text: 'I can’t thank Quinn’s care bridge enough for the love and attention they’ve shown my grandmother. ' +
        'They’ve have brought peace and joy in her life and her diginity was restored. You are a blessing to us all',
      author: 'Rhoda',
      role: 'Winchester MA'
    }
  ];
}
