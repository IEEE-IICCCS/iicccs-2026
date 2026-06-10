import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConferenceService } from '../../core/services/conference.service';
import { Speaker } from '../../models/conference.models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  speakers: Speaker[] = [];
  countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  private timer: any;

  stats = [
    { value: '200+', label: 'Expected Papers' },
    { value: '50+', label: 'Expert Reviewers' },
    { value: '15+', label: 'Countries' },
    { value: '2', label: 'Days Conference' },
  ];

  sponsors = [
    'IEEE Kolkata Section',
    'IEEE AP-MTT Kolkata Chapter',
    // 'IEEE Kharagpur Section',
    // 'IEEE SB: AEC (MTT-S & AP)',
  ];

  constructor(private cs: ConferenceService) {}

  ngOnInit() {
    this.speakers = this.cs.getSpeakers();
    this.updateCountdown();
    this.timer = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() { clearInterval(this.timer); }

  updateCountdown() {
    const diff = new Date('2026-11-20T09:00:00').getTime() - Date.now();
    if (diff > 0) {
      this.countdown.days = Math.floor(diff / 86400000);
      this.countdown.hours = Math.floor((diff % 86400000) / 3600000);
      this.countdown.minutes = Math.floor((diff % 3600000) / 60000);
      this.countdown.seconds = Math.floor((diff % 60000) / 1000);
    }
  }

  pad(n: number): string { return n.toString().padStart(2, '0'); }
}
