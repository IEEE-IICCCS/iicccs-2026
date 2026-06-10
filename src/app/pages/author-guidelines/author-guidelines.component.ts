import { Component } from '@angular/core';

@Component({
  selector: 'app-author-guidelines',
  standalone: true,
  imports: [],
  templateUrl: './author-guidelines.component.html',
  styleUrl: './author-guidelines.component.scss'
})
export class AuthorGuidelinesComponent {
  openCmt() {
    window.open('https://cmt3.research.microsoft.com/IICCCS2026', '_blank');
  }
}
