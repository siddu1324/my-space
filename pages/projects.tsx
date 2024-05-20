import React, { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    name: 'TakeMe',
    description: 'What does this delightful digital cupid do? It mixes up a cocktail of random activities and eateries, catering to your chosen cuisine. Like a good mystery novel, if the first chapter intrigues you, you flip the page. Similarly, if our suggestion tickles your fancy, you proceed to handpick locations from a curated list, sorted by the infallible Google Places API, complete with ratings and enticing images.',
    image: '/image4.jpeg',
    github: 'https://github.com/syedomair0/ByteMe-Hackathon',
    live: 'https://devpost.com/software/takeme-40o6nd'
  },
  {
    name: 'EDITH',
    description: 'Edith is an intelligent calendar that not only plans your day but also considers your health, stress levels, and preferences. Through integration with multiple APIs, it suggests Spotify playlists for stress, plans academic tasks, offers horoscope-based guidance, allows conversational planning, and even suggests activities based on the weather. Its a complete, holistic approach to daily planning.',
    image: '/image5.jpeg',
    github: 'https://github.com/TJun-Jie/edithGPT',
    live: 'https://devpost.com/software/edith-brshpa'
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <div>
      <h2>Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '50px' }}>
        {projectsData.map((project, index) => (
          <div key={index} style={{ margin: '20px', textAlign: 'center', maxWidth: '600px', width: '100%' }}>
            <Image src={project.image} alt={project.name} width={600} height={400} style={{ borderRadius: '5px', cursor: 'pointer' }} onClick={() => setActiveProject(index)} />
            {activeProject === index && (
              <div style={{ marginTop: '20px' }}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}><FaGithub /></a>
                <a href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
