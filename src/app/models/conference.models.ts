export interface Speaker {
  id: number;
  name: string;
  designation: string;
  organization: string;
  bio: string;
  image: string;
  linkedin?: string;
}

export interface CommitteeMember {
  name: string;
  designation?: string;
  organization?: string;
}

export interface CommitteeSection {
  title: string;
  members: CommitteeMember[];
}

export interface Track {
  title: string;
  topics: string[];
  icon: string;
}
