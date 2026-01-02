import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    title: 'San Diego Airbnb Analysis',
    year: '2024',
    description:
      'Exploratory data analysis of San Diego Airbnb listings using Python, focusing on rental price patterns, neighborhood trends, and host behaviors. Utilized machine learning models to uncover actionable insights for hosts and travelers',
    tech: ['Python', 'XGBoost', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/chrisbartha/Airbnb-Analysis',
    icon: 'github',
  },
  {
    title: 'ABGQI-CNN Acoustic Classifier',
    year: '2023',
    description:
      'Convolutional Neural Network (CNN) model that classifies environmental soundscapes from audio recordings, accurately identifying wildlife and other sound sources to support ecological research and biodiversity monitoring efforts',
    tech: ['Python', 'TensorFlow', 'CNN', 'Jupyter'],
    githubUrl: 'https://github.com/chrisbartha/ABGQI-CNN',
    icon: 'layers',
  },
  {
    title: 'Automated Wordle Solver',
    year: '2022',
    description:
      'Automation script that plays the Wordle game autonomously by detecting on-screen game state and entering optimal guesses (using letter frequency analysis), consistently solving each puzzle within the allowed six attempts using an algorithmically chosen start word',
    tech: ['Python', 'PyAutoGUI', 'Automation'],
    icon: 'grid',
  },
];
