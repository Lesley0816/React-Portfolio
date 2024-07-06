import React from 'react';

function Resume() {
  return (
    <section>
      <a href="path_to_resume.pdf" download>Download Resume</a>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        <li>Proficiency 3</li>
        {/* More proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;