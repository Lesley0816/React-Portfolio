import React from 'react';

function Header({ currentSection, setCurrentSection }) {
  return (
    <header>
      <h1>Developer Name</h1>
      <nav>
        <ul>
          {['About Me', 'Portfolio', 'Contact', 'Resume'].map(section => (
            <li key={section}>
              <a 
                href={`#${section.toLowerCase().replace(' ', '-')}`}
                className={currentSection === section ? 'active' : ''}
                onClick={() => setCurrentSection(section)}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;