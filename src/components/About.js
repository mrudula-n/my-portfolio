// src/components/About.js
import React from 'react';
import '../styles/About.css';

const roadmapData = [
  "Jan 2024 - Present: Serving as a Software Engineer Level 1 at GET Pvt Ltd, managing projects, handling social media, and overseeing project management tasks.",
  "Jan 2023 - Dec 2023: Worked as a Member of Technical Staff at GET Pvt Ltd, leading tasks and contributing to app user experience design.",
  "Aug 2022 - Nov 2022: Interned at GET Pvt Ltd, focusing on content development for Python and Java, and assisting in teaching.",
  "2021 - 2023: Earned an M.Sc. in Information Technology from IIIT Hyderabad, gaining expertise in Python, knowledge on Java, Computer Networks and Artificial Intelligence.",
  "2017 - 2021: Graduated with a B.Tech in Mechanical Engineering from Andhra Loyola Institute of Engineering and Technology, honing problem-solving and technical skills.",
  "2015 - 2017: Studied Intermediate in the MPC stream, preparing for engineering studies.",
  "2014 - 2015: Completed SSC with a 9.2 CGPA, building a strong foundation in science and math.",
];

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h2>About Me</h2>
        <p>
          As an aspiring frontend developer, I am passionate about creating modern, efficient, and user-friendly web applications. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React and Next.js, I aim to craft intuitive and responsive user interfaces that offer seamless experiences across all devices. I enjoy solving complex problems, optimizing performance, and continuously learning about the latest technologies to improve my skills. Whether working independently or collaborating within a team, I am dedicated to delivering high-quality, scalable solutions that drive innovation and enhance user engagement.
        </p>
      </div>

      <div className="about-right">
        <div className="roadmap">
          {roadmapData.map((item, index) => {
            const [boldText, ...rest] = item.split(":");
            return (
              <div key={index} className="roadmap-point">
                <div className="roadmap-dot"></div>
                <p>
                  <strong>{boldText}:</strong> {rest.join(":")}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
