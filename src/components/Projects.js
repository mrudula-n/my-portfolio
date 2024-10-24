// src/components/Projects.js
import React, { useState } from 'react';
import '../styles/Projects.css';

const projectsData = [
  {
    title: "Active Class - Google Sign-In Authentication",
    description: "Integrated Google Sign-In into the Active Class application to streamline the user authentication process. The implementation allowed users to log in securely using their Google accounts, reducing friction during the login process and improving overall user experience.",
    skills: "React, JavaScript, Authentication, UI/UX Design, OAuth 2.0",
    highlights: [
      "Enhanced security by utilizing OAuth 2.0 standards.",
      "Reduced time required for users to log in, leading to increased engagement.",
      "Integrated seamlessly with existing user management systems."
    ]
  },
  {
    title: "Custom Search Engine Tool",
    description: "Developed a JavaScript-based tool to extract URLs from a website containing specific keywords. The tool scans the HTML content, identifies relevant URLs, and displays them in an organized manner.",
    skills: "JavaScript, Web Scraping, DOM Manipulation, Problem-Solving",
    highlights: [
      "Built efficient algorithms to parse and extract data quickly.",
      "Developed a user-friendly interface to input keywords and view search results.",
      "Improved search functionality for web projects by enabling precise data extraction."
    ]
  },
  {
    title: "MSIT Course Website Development",
    description: "Created a responsive course website for the MSIT program using Jekyll. The website serves as a platform for students to access course content, schedules, and resources. It was designed with an emphasis on intuitive navigation and efficient content presentation.",
    skills: "Jekyll, HTML, CSS, Responsive Design, Content Management",
    highlights: [
      "Developed templates that automatically organized and displayed course content.",
      "Implemented responsive design, ensuring a consistent experience across desktops, tablets, and smartphones.",
      "Integrated features for smooth navigation and easy content updates by course administrators."
    ]
  },
  {
    title: "Responsive Redesign of the MSIT Website",
    description: "Led a project to improve the responsiveness and performance of the MSIT website using Next.js. The redesign focused on ensuring seamless usability across various devices and screen sizes, optimizing load times, and enhancing user experience.",
    skills: "Next.js, CSS, JavaScript, Web Performance Optimization",
    highlights: [
      "Achieved faster page load times by implementing code-splitting and optimizing assets.",
      "Enhanced mobile usability, leading to better accessibility for users on-the-go.",
      "Applied modern web design principles to create a clean, user-friendly interface."
    ]
  },
  {
    title: "Custom SQLite Database for Active Class",
    description: "Designed and implemented a custom SQLite database to manage data efficiently for the Active Class application. The database was structured to support faster queries and better data organization, facilitating easy data handling and retrieval.",
    skills: "SQLite, Database Design, Data Optimization, SQL",
    highlights: [
      "Developed an efficient schema that minimized redundancy and improved data integrity.",
      "Optimized query performance, reducing data retrieval times significantly.",
      "Ensured scalability to accommodate growing datasets."
    ]
  },
  {
    title: "Python and Java Course Content Development",
    description: "Created structured content for Python and Java courses during an internship at GET Pvt Ltd. Developed comprehensive mind maps, lesson plans, and learning modules to support students in mastering fundamental programming concepts.",
    skills: "Content Development, Programming (Python & Java), Teaching Assistance, Educational Planning",
    highlights: [
      "Designed intuitive learning paths to simplify complex programming topics.",
      "Improved course engagement by creating interactive examples and exercises.",
      "Enhanced the overall learning experience by providing hands-on guidance."
    ]
  },
  {
    title: "Project Management & Social Media Management",
    description: "Managed various projects at GET Pvt Ltd, overseeing the progress and ensuring timely delivery of features. Additionally, handled social media platforms, creating content and strategies to increase engagement and reach for the company’s digital presence.",
    skills: "Project Management, Social Media Strategy, Content Creation, Agile Methodologies",
    highlights: [
      "Coordinated tasks and facilitated communication across teams to keep projects on track.",
      "Implemented social media campaigns that led to increased followers and engagement.",
      "Leveraged data analysis to refine strategies and improve the digital footprint."
    ]
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleProject = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <div className="projects-container">
      <h2 className="projects-heading">My Projects</h2>
      <div className="accordion">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className={`accordion-item ${activeProject === index ? 'open' : ''}`} 
            onClick={() => toggleProject(index)}
          >
            <h3 className="accordion-title">{project.title}</h3>
            {activeProject === index && (
              <div className="accordion-content">
                <p>{project.description}</p>
                <p><strong>Skills:</strong> {project.skills}</p>
                <ul className="project-highlights">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
