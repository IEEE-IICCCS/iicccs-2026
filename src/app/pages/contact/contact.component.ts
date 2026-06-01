import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

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
loading = false;
error = false;

constructor(private contactService: ContactService) {}

  submit() {
  if (this.form.name && this.form.email && this.form.message) {
    this.loading = true;
    this.error = false;

    this.contactService.submitForm(this.form).subscribe({
      next: () => {
        this.submitted = true;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
}
