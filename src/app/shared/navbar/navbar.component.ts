import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Committee', path: '/committee' },
  { label: 'Registration', path: '/registration' },
  { label: 'Author Guidelines', path: '/author-guidelines' },
  { label: 'Call for Papers', path: '/call-for-papers' },
  { label: 'Speakers', path: '/speakers' },
  { label: 'Contact', path: '/contact' },
  {
    label: 'About AEC',
    externalUrl: 'http://www.aecwb.edu.in/'
  }
];

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 60); }

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }
}
