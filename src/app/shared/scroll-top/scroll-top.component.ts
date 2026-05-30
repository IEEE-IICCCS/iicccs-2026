import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="scroll-top" [class.visible]="visible()" (click)="scrollTop()" title="Back to top">↑</button>
  `,
  styles: [`
    .scroll-top {
      position: fixed; bottom: 2rem; right: 1.5rem; z-index: 999;
      width: 44px; height: 44px; border-radius: 8px;
      background: linear-gradient(135deg, #1a5fad, #2272cc);
      color: #fff; border: none; font-size: 1.1rem; cursor: pointer;
      opacity: 0; transform: translateY(20px); pointer-events: none;
      transition: all 0.3s ease; box-shadow: 0 4px 16px rgba(26,95,173,0.3);
      &.visible { opacity: 1; transform: translateY(0); pointer-events: all; }
      &:hover { box-shadow: 0 6px 24px rgba(26,95,173,0.45); transform: translateY(-2px); }
    }
  `]
})
export class ScrollTopComponent {
  visible = signal(false);
  @HostListener('window:scroll')
  onScroll() { this.visible.set(window.scrollY > 400); }
  scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
}
