import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Roadtrip-Playlist-Maker', img: 'path_to_img', link: 'https://lesley0816.github.io/Roadtrip-Playlist-Maker/', repo: 'https://github.com/Lesley0816/Roadtrip-Playlist-Maker' },

    { title: 'final-project', img: 'path_to_img', link: 'deployed_link', repo: 'https://github.com/DougyShy/final-project' },

    { title: 'Code Quiz', img: 'path_to_img', link: 'lesley0816.github.io/Code-Quiz/', repo: 'https://github.com/Lesley0816/Code-Quiz' },
    // ... five more projects
  ];

  return (
    <section>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <img src={project.img} alt={project.title} />
          <a href={project.link}>Live App</a>
          <a href={project.repo}>GitHub Repo</a>
        </div>
      ))}
    </section>
  );
}

export default Portfolio;
