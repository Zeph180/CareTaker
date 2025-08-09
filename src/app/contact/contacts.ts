import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [
    FormsModule,
    NgClass
  ],
  templateUrl: './contacts.html',
  standalone: true,
  styleUrl: './contacts.css'
})
export class Contacts {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  services = [
    'Resident Care',
    'Elderly Nutrition',
    'Skilled Nursing',
    'Caring Staff',
    'General Inquiry'
  ];

  isSubmitting = false;
  submitMessage = '';

  onSubmit() {
    this.isSubmitting = true;
    this.submitMessage = '';

    // Basic form validation
    if (!this.contactForm.name || !this.contactForm.email || !this.contactForm.message) {
      this.submitMessage = 'Please fill in all required fields.';
      this.isSubmitting = false;
      return;
    }

    // Create FormData for Formspree
    const formData = new FormData();
    formData.append('name', this.contactForm.name);
    formData.append('email', this.contactForm.email);
    formData.append('phone', this.contactForm.phone);
    formData.append('service', this.contactForm.service);
    formData.append('message', this.contactForm.message);

    fetch('https://formspree.io/f/xovlyenv', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        this.submitMessage = 'Thank you for your message! We\'ll get back to you soon.';
        this.resetForm();
      } else {
        this.submitMessage = 'Sorry, there was an error sending your message. Please try again.';
      }
    }).catch(error => {
      console.error('Error:', error);
      this.submitMessage = 'Sorry, there was an error sending your message. Please try again.';
    }).finally(() => {
      this.isSubmitting = false;
    });
  }

  resetForm() {
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
  }
}
