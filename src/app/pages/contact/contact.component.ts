import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  form = { name: '', email: '', subject: '', message: '' };
  submitted = false;

  submit() {
    if (this.form.name && this.form.email && this.form.message) {
      this.submitted = true;
    }
  }
}
