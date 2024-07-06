import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Project 1', img: 'path_to_img', link: 'deployed_link', repo: 'github_link' },
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
