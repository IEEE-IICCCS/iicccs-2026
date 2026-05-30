import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceService } from '../../core/services/conference.service';
import { Track } from '../../models/conference.models';

@Component({
  selector: 'app-call-for-papers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './call-for-papers.component.html',
  styleUrl: './call-for-papers.component.scss'
})
export class CallForPapersComponent implements OnInit {
  tracks: Track[] = [];
  constructor(private cs: ConferenceService) {}
  ngOnInit() { this.tracks = this.cs.getTracks(); }
}
