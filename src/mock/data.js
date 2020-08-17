import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.padjadjaranlab.com', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [

  {
    id: nanoid(),
    img: 'project2.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://padjadjaranlab.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://padjadjaranlab.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://padjadjaranlab.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://padjadjaranlab.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project6.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://padjadjaranlab.com', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project7.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://padjadjaranlab.com', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
