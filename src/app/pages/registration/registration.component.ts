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
  { category: 'Student / Research Scholars (IEEE Member)', early: '₹6,000', regular: '₹7,000', foreign: '$90' },
  { category: 'Student / Research Scholars (Non-IEEE Member)', early: '₹7,000', regular: '₹8,000', foreign: '$110' },
  { category: 'Academicians (IEEE Member)', early: '₹8,000', regular: '₹9,000', foreign: '$135' },
  { category: 'Academicians (Non-IEEE Member)', early: '₹9,000', regular: '₹10,000', foreign: '$160' },
  { category: 'Industry Professionals (IEEE Member)', early: '₹11,000', regular: '₹12,000', foreign: '$160' },
  { category: 'Industry Professionals (Non-IEEE Member)', early: '₹12,000', regular: '₹13,000', foreign: '$180' },
];
}
