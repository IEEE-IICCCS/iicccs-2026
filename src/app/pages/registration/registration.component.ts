import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  fees = [
    { category: 'IEEE Student Member', early: '₹3,000', regular: '₹3,500', foreign: '$80' },
    { category: 'IEEE Member', early: '₹5,000', regular: '₹6,000', foreign: '$150' },
    { category: 'Non-IEEE Student', early: '₹4,000', regular: '₹4,500', foreign: '$100' },
    { category: 'Non-IEEE Professional', early: '₹6,000', regular: '₹7,000', foreign: '$175' },
    { category: 'Industry Participant', early: '₹8,000', regular: '₹9,000', foreign: '$200' },
  ];
}
