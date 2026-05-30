import { Injectable } from '@angular/core';
import { Speaker, CommitteeSection, Track } from '../../models/conference.models';

@Injectable({ providedIn: 'root' })
export class ConferenceService {

  getSpeakers(): Speaker[] {
    return [
      { id: 1, name: 'Prof. Bhaskar Gupta', designation: 'Professor', organization: 'University of Calcutta', bio: 'Renowned researcher in microwave engineering and antenna systems with 30+ years of academic excellence.', image: 'assets/images/speaker1.jpg', linkedin: '#' },
      { id: 2, name: 'Dr. Ananda Sankar Chakrabarti', designation: 'Senior Scientist', organization: 'ISRO, Ahmedabad', bio: 'Expert in signal processing and satellite communication systems, leading various national space missions.', image: 'assets/images/speaker2.jpg', linkedin: '#' },
      { id: 3, name: 'Prof. Partha Pratim Sarkar', designation: 'Professor & Head', organization: 'Jadavpur University', bio: 'Specialist in computational electromagnetics, published over 150 research papers in IEEE journals.', image: 'assets/images/speaker3.jpg', linkedin: '#' },
      { id: 4, name: 'Dr. Sujata Sengupta', designation: 'Associate Professor', organization: 'NIT Durgapur', bio: 'Pioneer in wireless communication and 5G/6G technologies with industry collaboration experience.', image: 'assets/images/speaker4.jpg', linkedin: '#' },
    ];
  }

  getCommittee(): CommitteeSection[] {
    return [
      { title: 'Chief Patron', members: [{ name: 'Sri Bikash Singh', designation: 'Chairman', organization: 'AEC Governing Body' }] },
      { title: 'Patrons', members: [
        { name: 'Dr. Sujoy Bhattacharya', designation: 'Principal', organization: 'Asansol Engineering College' },
        { name: 'Prof. Debabrata Ghosh', designation: 'Vice Principal', organization: 'Asansol Engineering College' }
      ]},
      { title: 'Conference Chairs', members: [
        { name: 'Prof. Chittajit Sarkar', designation: 'HOD, ECE Department' },
        { name: 'Prof. Chiranjib Goswami', designation: 'Associate Professor, ECE' },
        { name: 'Prof. Sumanta Karmakar', designation: 'Assistant Professor, ECE' }
      ]},
      { title: 'Technical Program Committee', members: [
        { name: 'Prof. Anupam Karmakar', organization: 'NIT Durgapur' },
        { name: 'Dr. Biswajit Mahanty', organization: 'IIT Kharagpur' },
        { name: 'Prof. Soumik Das', organization: 'IIEST Shibpur' },
        { name: 'Dr. Rabindra Kumar Mishra', organization: 'University of Burdwan' },
      ]},
      { title: 'Advisory Committee', members: [
        { name: 'Prof. Tapas Kumar Bhattacharya', organization: 'IIT Kharagpur' },
        { name: 'Prof. Bhaskar Gupta', organization: 'University of Calcutta' },
        { name: 'Dr. K. Mridula', organization: 'CUSAT, Kerala' },
      ]},
      { title: 'Organizing Committee', members: [
        { name: 'Prof. Subrata Roy' }, { name: 'Prof. Mainak Banerjee' },
        { name: 'Prof. Sourav Das' }, { name: 'Prof. Amrita Chakraborty' },
        { name: 'Prof. Tanmoy Chakraborty' }, { name: 'Prof. Arpita Ghosh' },
      ]}
    ];
  }

  getTracks(): Track[] {
    return [
      { title: 'Communication Systems', icon: '📡', topics: ['5G/6G Networks', 'Satellite Communication', 'Optical Fiber', 'Wireless Sensor Networks', 'IoT Protocols', 'MIMO Systems'] },
      { title: 'Signal Processing', icon: '📊', topics: ['Image & Video Processing', 'Speech Processing', 'Biomedical Signals', 'Machine Learning for SP', 'Radar Signal Processing', 'Deep Learning'] },
      { title: 'Computing & AI', icon: '🖥️', topics: ['Edge Computing', 'Cloud Architecture', 'AI/ML Applications', 'Quantum Computing', 'Embedded Systems', 'VLSI Design'] },
      { title: 'Antenna & Microwave', icon: '🔭', topics: ['Microstrip Antennas', 'Phased Arrays', 'Metamaterials', 'RF Circuit Design', 'EMC & EMI', 'Reconfigurable Antennas'] },
    ];
  }
}
