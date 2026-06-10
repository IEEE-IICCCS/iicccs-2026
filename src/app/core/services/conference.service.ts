import { Injectable } from '@angular/core';
import {
  Speaker,
  CommitteeSection,
  Track,
} from '../../models/conference.models';

@Injectable({ providedIn: 'root' })
export class ConferenceService {
  getSpeakers(): Speaker[] {
  return [
    {
      id: 1,
      name: 'Prof. Debatosh Guha',
      designation: 'Professor',
      organization: 'University of Calcutta',
      bio: 'Distinguished researcher in microwave engineering, antenna design, metamaterials, and AI-based antenna systems. Recipient of multiple national and international recognitions.',
      image: '',
      linkedin: 'https://in.linkedin.com/in/debatosh-guha-2b0a3615'
    },
    {
      id: 3,
      name: 'Prof. Chittajit Sarkar',
      designation: 'Principal',
      organization: 'Islampur College',
      bio: 'Senior IEEE member with expertise in antenna engineering, wireless communications, and interdisciplinary electromagnetic research.',
      image: '',
      linkedin: 'https://www.linkedin.com/in/mrinal-mandal-41452055/'
    },
    {
      id: 3,
      name: 'Dr. Goutam Chattopadhyay',
      designation: 'Senior Research Scientist',
      organization: 'NASA Jet Propulsion Laboratory (JPL)',
      bio: 'Accomplished researcher specializing in electrical engineering, physics, telecommunications, and space science technologies.',
      image: '',
      linkedin: 'https://www.linkedin.com/in/goutam-chattopadhyay-b4073a7'
    },
    {
      id: 4,
      name: 'Prof. Jawad Siddiqui',
      designation: 'Associate Professor',
      organization: "Queen's University, Canada",
      bio: 'Internationally recognized expert in radar systems, radio physics, and microwave engineering with extensive research contributions.',
      image: '',
      linkedin: 'https://ca.linkedin.com/in/jawad-y-siddiqui-59454b65'
    },
    {
      id: 5,
      name: 'Prof. Sajal Biring',
      designation: 'Associate Professor',
      organization: 'Ming Chi University of Technology',
      bio: 'Researcher in plasmonics, nano-optics, plasmonic sensors, and optoelectronic device integration.',
      image: '',
      linkedin: '#'
    },
    {
      id: 6,
      name: 'Prof. Sushrut Das',
      designation: 'Associate Professor',
      organization: 'IIT (ISM) Dhanbad',
      bio: 'Expert in electromagnetics, wireless communications, and antenna engineering with several international recognitions.',
      image: '',
      linkedin: 'https://www.linkedin.com/in/sushrut-das-06823677/'
    },
    {
      id: 7,
      name: 'Dr. Goutam Kumar Dalapati',
      designation: 'CEO',
      organization: 'SunKonnect Pte Ltd, Singapore',
      bio: 'Specialist in renewable energy technologies, semiconductor devices, and advanced materials research.',
      image: '',
      linkedin: 'https://www.linkedin.com/in/goutam-kumar-dalapati-4416a3170'
    },
    {
      id: 8,
      name: 'Prof. Sujit Kumar Mandal',
      designation: 'Professor',
      organization: 'NIT Durgapur',
      bio: 'Researcher in photonic networks, optical communication systems, and communication engineering technologies.',
      image: '',
      linkedin: '#'
    },
    {
      id: 9,
      name: 'Prof. Rowdra Ghatak',
      designation: 'Professor',
      organization: 'NIT Durgapur',
      bio: 'Leading academic in RFIDs, antennas, computational electromagnetics, and microwave engineering.',
      image: '',
      linkedin: 'https://www.linkedin.com/in/rowdra-ghatak-3891b287/'
    },
    {
      id: 10,
      name: 'Dr. Chinmoy Saha',
      designation: 'Professor',
      organization: 'IIST',
      bio: 'Renowned researcher in avionics, wireless power transfer, microwave circuits, and advanced antenna systems.',
      image: '',
      linkedin: 'https://www.linkedin.com/in/dr-chinmoy-saha-7129a9192/'
    },
    {
      id: 11,
      name: 'Prof. Somak Bhattacharyya',
      designation: 'Associate Professor',
      organization: 'IIT (BHU) Varanasi',
      bio: 'Award-winning scientist with contributions to radio science, antennas, and electromagnetic applications.',
      image: '',
      linkedin: 'https://www.linkedin.com/in/somak-bhattacharyya-735726182/'
    },
    {
      id: 12,
      name: 'Dr. Sumanta Gupta',
      designation: 'Associate Professor',
      organization: 'IIT Patna',
      bio: 'Researcher in optical communications, photonic networking, and communication engineering systems.',
      image: '',
      linkedin: 'https://www.linkedin.com/in/dr-sumanta-gupta-23b4b3a/'
    },
    {
      id: 13,
      name: 'Dr. Shih-Hsin Chang',
      designation: 'Director',
      organization: 'MSSCORPS Co. Ltd., Taiwan',
      bio: 'Expert in semiconductor technology, materials characterization, electron microscopy, and failure analysis.',
      image: '',
      linkedin: '#'
    },
    {
      id: 14,
      name: 'Dr. Debatri Chatterjee',
      designation: 'Senior Scientist',
      organization: 'TCS Research',
      bio: 'Research scientist specializing in physiological signal processing, AI, and human cognition analysis.',
      image: '',
      linkedin: 'https://www.linkedin.com/in/dr-debatri-chatterjee-4a327819/'
    },
    {
      id: 15,
      name: 'Prof. Arindam Biswas',
      designation: 'Associate Professor',
      organization: 'Kazi Nazrul University',
      bio: 'Researcher in IoT, Machine Learning, Deep Learning, and computational intelligence systems.',
      image: '',
      linkedin: 'https://www.linkedin.com/in/dr-arindam-biswas-3a727145'
    }
  ];
}

  getCommittee(): CommitteeSection[] {
  return [
  {
    title: 'Chief Patron',
    members: [
      {
        name: 'Sardar Taranjit Singh',
        designation: 'MD',
        organization: 'JIS Group',
      },
      {
        name: 'Mr. Tapan Kumar Ghosh',
        designation: 'Director',
        organization: 'AEC',
      },
    ],
  },
  {
    title: 'Patron',
    members: [
      {
        name: 'Mr. Simarpreet Singh',
        designation: 'Director',
        organization: 'JIS Group',
      },
      {
        name: 'Mr. Shankar Biswas',
        designation: 'Joint Director',
        organization: 'JIS Group',
      },
      {
        name: 'Prof. Arup Kumar Bhowmick',
        designation: 'Principal',
        organization: 'AEC',
      },
      {
        name: 'Prof. Debasis Sarkar',
        designation: 'Registrar',
        organization: 'AEC',
      },
    ],
  },
  {
    title: 'Program Chair',
    members: [
      {
        name: 'Prof. Chiranjib Goswami',
        organization: 'AEC',
      },
      {
        name: 'Prof. Ashmi Chakraborty',
        organization: 'AEC',
      },
    ],
  },
  {
    title: 'Program Co-Chair',
    members: [
      {
        name: 'Prof. Prajit Paul',
        organization: 'AEC',
      },
    ],
  },
  {
    title: 'International Advisory Committee',
    members: [
      { name: 'Prof. Goutam Chattopadhyay', organization: 'NASA Jet Propulsion Lab, USA' },
      { name: 'Prof. (Dr.) Yahia M. Antar', organization: 'Royal Military College of Canada & Queen’s University, Canada' },
      { name: 'Prof. Ajay K. Poddar', organization: 'Synergy Microwave Corporation, Paterson, USA' },
      { name: 'Prof. Sajal Biring', organization: 'Ming Chi University, Taiwan' },
      { name: 'Prof. Jawad Siddiqui', organization: "Queen's University, Kingston, Canada" },
      { name: 'Prof. Chia-Hao Ku', organization: 'Ming Chi University, Taiwan' },
      { name: 'Prof. Kai Chen', organization: 'Victoria University of Wellington, New Zealand' },
      { name: 'Prof. Shital Das', designation: 'Technology Lead', organization: 'Fortum Power and Heat Oy, Finland' },
      { name: 'Prof. Kiran Sankar Maiti', organization: 'Max–Planck-Institute of Quantum Optics, Germany' },
      { name: 'Prof. Susmita Roy', organization: 'Technical University of Munich, Germany' },
      { name: 'Prof. Goutam Kumar Dalapati', designation: 'CEO', organization: 'Sunkonnect Pte Ltd, Singapore' },
    ],
  },
  {
    title: 'National Advisory Committee',
    members: [
      { name: 'Prof. Ajoy Kumar Ray', designation: 'Padmashri, Director', organization: 'JIS Institute of Advanced Studies & Research' },
      { name: 'Prof. Debatosh Guha', designation: 'IRPE', organization: 'Calcutta University' },
      { name: 'Prof. Chinmoy Saha', designation: 'Dept. Avionics', organization: 'IIST, Department of Space, Govt. Of India' },
      { name: 'Prof. Chandrakanta Kumar', organization: 'ISRO Satellite Centre, Bengaluru, Karnataka' },
      { name: 'Prof. Debangshu Dey', designation: 'Chair, MDC, IEEE-India Council Secretary, Kolkata Section' },
      { name: 'Prof. Tridibesh Nag', designation: 'Vice-Chair, MDC, IEEE-India Council Secretary, Kolkata Section' },
      { name: 'Prof. Bhaskar Gupta', designation: 'Vice Chancellor', organization: 'IEM' },
      { name: 'Prof. Tirtha Pratim Das', organization: 'ISRO Headquarters, Bengaluru, India' },
      { name: 'Prof. Ravi Kumar Gangwar', organization: 'IIT (ISM) Dhanbad' },
      { name: 'Prof. Sushrut Das', organization: 'IIT (ISM) Dhanbad' },
      { name: 'Prof. M. K. Mandal', organization: 'IIT KGP' },
      { name: 'Prof. Jyotirmoy Chatterjee', designation: 'Dean (Research)', organization: 'JISIASR' },
      { name: 'Prof. Sumanta Gupta', organization: 'IIT Patna' },
      { name: 'Prof. Somak Bhattacharjee', organization: 'IIT BHU' },
      { name: 'Prof. Debjani Mitra', organization: 'IIT (ISM) Dhanbad' },
      { name: 'Prof. Subhashis Chatterjee', organization: 'IIT (ISM) Dhanbad' },
      { name: 'Prof. Monodipan Sahu', organization: 'IIT (ISM) Dhanbad' },
      { name: 'Prof. Satyajit Chakraborty', organization: 'SAMEER Kolkata' },
      { name: 'Prof. Debdeep Sarkar', organization: 'IISc Bangalore, India' },
      { name: 'Prof. Rowdra Ghatak', organization: 'NIT Durgapur' },
      { name: 'Prof. A.K Bhattacharjee', organization: 'NIT Durgapur' },
      { name: 'Prof. Nikhil Ranjan Das', designation: 'IRPE', organization: 'Calcutta University' },
      { name: 'Prof. Suparna Kar Chowdhury', organization: 'Jadavpur University' },
      { name: 'Prof. Susanta Parui', organization: 'IIEST, Shibpur' },
      { name: 'Prof. Chittajit Sarkar', organization: 'Islampur College, WB' },
      { name: 'Prof. Monotosh Biswas', organization: 'Jadavpur University' },
      { name: 'Prof. Sujit Kr. Mandal', organization: 'NIT Durgapur' },
      { name: 'Prof. Debatri Chatterjee', designation: 'Senior Scientist', organization: 'TCS Research, TSC' },
      { name: 'Prof. Susanta Ray', organization: 'Jadavpur University' },
      { name: 'Prof. Atanu Kundu', organization: 'HIT Kolkata' },
      { name: 'Prof. Koushik Dutta', organization: 'NSEC, Kolkata' },
    ],
  },
  {
    title: 'Technical Program Committee',
    members: [
      { name: 'Prof. Monish Chatterjee', organization: 'AEC' },
      { name: 'Prof. Abhishek Banerjee', organization: 'AEC' },
      { name: 'Prof. Debasis Chakraborty', organization: 'AEC' },
      { name: 'Prof. Apurba Chatterjee', organization: 'AEC' },
      { name: 'Prof. Anup Kumar Mukhopadhyay', organization: 'AEC' },
      { name: 'Prof. Sheuli Chakraborty', organization: 'AEC' },
      { name: 'Prof. Abhishek Bandopadhay', organization: 'AEC' },
      { name: 'Prof. Srijan Paul', organization: 'AEC' },
      { name: 'Prof. Mithu Dey', organization: 'AEC' },
      { name: 'Prof. Biplab Saha', organization: 'AEC' },
    ],
  },
  {
    title: 'Publication Chair',
    members: [
      { name: 'Prof. Soumen Sen', organization: 'AEC' },
      { name: 'Prof. Khushi Banerjee', organization: 'AEC' },
      { name: 'Prof. Rupam Das', organization: 'AEC' },
      { name: 'Prof. Sujit Goswami', organization: 'AEC' },
      { name: 'Prof. Saswata Chakraborty', organization: 'AEC' },
      { name: 'Prof. Shiv Charan Puri', organization: 'AEC' },
      { name: 'Prof. Intekhab Hussain', organization: 'AEC' },
      { name: 'Prof. Swati Bhattacharjee', organization: 'AEC' },
      { name: 'Prof. Biplab Bhowmick', organization: 'AEC' },
    ],
  },
  {
    title: 'Finance Chair',
    members: [
      { name: 'Prof. Sumanta Karmakar', organization: 'AEC' },
      { name: 'Prof. Gurjeet Singh', organization: 'AEC' },
      { name: 'Mr. Kamlesh Gupta', organization: 'AEC' },
    ],
  },
  {
    title: 'Technical Chair',
    members: [
      { name: 'Prof. Sambit S Mondal', organization: 'AEC' },
      { name: 'Prof. Lipika Mandal', organization: 'AEC' },
      { name: 'Prof. Biplab Kumar Mondal', organization: 'AEC' },
      { name: 'Prof. Bikash Chandra Debnath', organization: 'AEC' },
      { name: 'Prof. Vedatreyee Chatterjee', organization: 'AEC' },
      { name: 'Prof. Lumbini Bhaumik', organization: 'AEC' },
      { name: 'Prof. Khushbu Chandrakar', organization: 'AEC' },
    ],
  },
  {
    title: 'Technical Committee Members',
    members: [
      { name: 'Prof. Sumitra Bhattacharyya', organization: 'AEC' },
      { name: 'Prof. Jay Bandapadhyay', organization: 'AEC' },
      { name: 'Prof. Karuna Nandi', organization: 'AEC' },
      { name: 'Prof. Subhamay Bhattacharyya', organization: 'AEC' },
      { name: 'Prabal Chakraborty', designation: 'Ex- IEEE SB & MTT-S Treasurer' },
      { name: 'Biswajit Bose', designation: 'Ex- IEEE SB & MTT-S Chair' },
      { name: 'Ananya Ghosh', designation: 'Ex- IEEE SB & MTT-S Chair' },
    ],
  },
];
}

  getTracks(): Track[] {
  return [
    {
      title: 'Communication Track',
      icon: '📡',
      topics: [
        'Communication Theory',
        'Information Theory & Coding',
        'Wireless Mobile & Vehicular Communication & Satellite Communication',
        'Telecommunication Networks',
        'Cooperative, Device to Device and Multi-hop Communication',
        'Green Communication',
        'Cognitive Radio, Optical Communications & Networks',
        'MIMO, Massive MIMO and Cloud RAN',
        'Channel Modelling Characterization and Estimation',
        'Modulation, Coding Diversity, Equalization, and Synchronization',
        'Smart Grid Communication & IoT Networks',
        'Antenna Theory & Technique',
        'Microwave Filters, Oscillator and Amplifiers',
        'Terahertz System, RF Nanotechnology',
        'Metamaterials & Bio-Electromagnetics',
        'EBG, FSS Applications in Antenna and Microwave',
        'Microwave Imaging and Diagnostics',
        'RF Antennas for Space Technology',
      ],
    },
    {
      title: 'Computing Track',
      icon: '🖥️',
      topics: [
        'Linear and Nonlinear Optimization',
        'Combinatorial Optimization',
        'Stochastic Optimization',
        'Dynamic Optimization',
        'Fuzzy Optimization',
        'Optimal Control Theory',
        'Multi-objective Optimization',
        'Evolutionary and Bio-inspired Optimization',
        'Intelligent Information and Technology',
        'Supply Chain and Inventory Control',
        'Game Theory',
        'Image Processing',
        'Green Computing',
        'Ubiquitous Computing and Application Cloud Computing',
        'Internet of Things (IoT)',
      ],
    },
    {
      title: 'Device and Signal Processing Track',
      icon: '📊',
      topics: [
        'Image & Video Signal Processing & Medical Imaging',
        'DSP Algorithms & Architectures',
        'Pattern Analysis & Classification',
        'Large Dimensional Signal Processing',
        'Compressive Sensing',
        'Statistical Signal Processing',
        'Signal Processing for Big Data & Adaptive Signal Processing',
        'Biomedical/Genomic Signal & Image Processing, Geophysical / Radar / Sonar / Optical / Smart Sensor Signal Processing',
        'Analog/Digital and Mixed Signal Circuits and Systems',
        'Low Power Circuits and Systems, MEMS Device Technology, Modelling and Simulation',
        'Devices and Circuits for RF Communication',
        'VLSI for Biomedical Signal Processing',
        'Microwave Filters, Oscillator and Amplifiers',
        'Terahertz System, RF Nanotechnology',
        'EBG, FSS Applications in Antenna and Microwave',
        'Microwave Imaging and Diagnostics',
        'RF Antennas for Space Technology',
      ],
    },
  ];
}
}
