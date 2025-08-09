import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-contacts',
  imports: [
    FormsModule
  ],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css'
})
export class Contacts {
  isSubmitting = false;
  isSubmitted = false;
  submitError = '';

  contactInfo = {
    phone: '+1 (555) 123-4567',
    email: 'info@carehome.com',
    address: '123 Care Street, Health City, HC 12345',
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM'
  };

  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceInterest: ''
  };

  serviceOptions = [
    'Resident Care',
    'Elderly Nutrition',
    'Skilled Nursing',
    'Caring Staff',
    'General Inquiry'
  ];

  async onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitting = true;
      this.submitError = '';

      try {
        // Replace 'YOUR_FORMSPREE_ID' with your actual Formspree form ID
        const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: this.formData.name,
            email: this.formData.email,
            phone: this.formData.phone,
            subject: this.formData.subject,
            message: this.formData.message,
            serviceInterest: this.formData.serviceInterest,
            _replyto: this.formData.email
          })
        });

        if (response.ok) {
          this.isSubmitted = true;
          this.resetForm();
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        this.submitError = 'Failed to send message. Please try again.';
      } finally {
        this.isSubmitting = false;
      }
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      serviceInterest: ''
    };
  }

  resetSubmission() {
    this.isSubmitted = false;
    this.submitError = '';
  }
}
