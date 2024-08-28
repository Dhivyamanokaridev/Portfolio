import React from 'react';
import '../components/style/Skills.css'


const Skills = () => {
  const skills = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Redux',
    'Postman',
    'node',
    'postgress',
    'Git'
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map(skill => (
          <div key={skill} className="skill-item">
            <span className="skill-icon">🔹</span> 
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
