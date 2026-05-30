import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceService } from '../../core/services/conference.service';
import { Speaker } from '../../models/conference.models';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss'
})
export class SpeakersComponent implements OnInit {
  speakers: Speaker[] = [];
  constructor(private cs: ConferenceService) {}
  ngOnInit() { this.speakers = this.cs.getSpeakers(); }
}
