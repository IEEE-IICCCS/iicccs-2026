import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceService } from '../../core/services/conference.service';
import { CommitteeSection } from '../../models/conference.models';

@Component({
  selector: 'app-committee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './committee.component.html',
  styleUrl: './committee.component.scss'
})
export class CommitteeComponent implements OnInit {
  sections: CommitteeSection[] = [];
  constructor(private cs: ConferenceService) {}
  ngOnInit() { this.sections = this.cs.getCommittee(); }
}
