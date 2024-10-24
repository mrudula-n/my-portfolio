// src/components/Skills.js
import React, { useState } from 'react';
import '../styles/Skills.css';
import { FaCode, FaPalette, FaTools, FaDatabase, FaGitAlt, FaCogs, FaBug, FaLightbulb, FaHandsHelping, FaComments, FaRegClock, FaBrain } from 'react-icons/fa'; // Import icons

const itSkillsData = [
  {
    icon: <FaCode />,
    title: "Frontend Development",
    description: "Expertise in HTML, CSS, JavaScript, React, Next.js."
  },
  {
    icon: <FaPalette />,
    title: "User Interface Design",
    description: "Creating visually appealing and intuitive interfaces."
  },
  {
    icon: <FaTools />,
    title: "Performance Optimization",
    description: "Optimizing websites for faster loading times."
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description: "Experience with designing and managing SQLite databases."
  },
  {
    icon: <FaGitAlt />,
    title: "Version Control & Collaboration",
    description: "Using Git and GitHub for version control and CI/CD."
  },
  {
    icon: <FaCogs />,
    title: "Web Tools & Technologies",
    description: "Familiar with Docker, Figma, and other productivity tools."
  },
  {
    icon: <FaBug />,
    title: "Testing & Debugging",
    description: "Unit testing and BDD to ensure code quality."
  }
];

const softSkillsData = [
  {
    icon: <FaLightbulb />,
    title: "Problem-Solving",
    description: "Developing innovative solutions for complex problems."
  },
  {
    icon: <FaHandsHelping />,
    title: "Collaboration & Teamwork",
    description: "Working within agile teams for efficient project goals."
  },
  {
    icon: <FaBrain />,
    title: "Adaptability",
    description: "Quick to learn and apply new technologies."
  },
  {
    icon: <FaComments />,
    title: "Effective Communication",
    description: "Facilitating seamless collaboration with stakeholders."
  },
  {
    icon: <FaRegClock />,
    title: "Time Management",
    description: "Efficiently managing tasks and meeting deadlines."
  },
  {
    icon: <FaBrain />,
    title: "Attention to Detail",
    description: "Ensuring high quality and precision in projects."
  }
];

const Skills = () => {
  const [showItSkillsModal, setShowItSkillsModal] = useState(false);
  const [showSoftSkillsModal, setShowSoftSkillsModal] = useState(false);

  const closeModal = () => {
    setShowItSkillsModal(false);
    setShowSoftSkillsModal(false);
  };

  return (
    <div className="skills-container">
      <div className="skills-card">
        <h2>IT Skills</h2>
        <p className="short-description">Experience with frontend frameworks, performance optimization, and more.</p>
        <button onClick={() => setShowItSkillsModal(true)} className="know-more-btn">
          Know More
        </button>
      </div>

      <div className="skills-card">
        <h2>Soft Skills</h2>
        <p className="short-description">Proficient in communication, problem-solving, and adaptability.</p>
        <button onClick={() => setShowSoftSkillsModal(true)} className="know-more-btn">
          Know More
        </button>
      </div>

      {/* IT Skills Modal */}
      {showItSkillsModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>IT Skills</h2>
            <div className="skills-list">
              {itSkillsData.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-content">
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

      {/* Soft Skills Modal */}
      {showSoftSkillsModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>Soft Skills</h2>
            <div className="skills-list">
              {softSkillsData.map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-content">
                    <h3 className="skill-title">{skill.title}</h3>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
