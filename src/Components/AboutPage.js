import React from 'react';
import '../App.css'
import logo from '../assets/girja.jpeg'

const teamMembers = [
  {
    id: 1,
    name: 'Girja Rajput',
    role: 'CEO and UI/UX Designer',
    image: 'https://via.placeholder.com/150',
    bio: 'Girja is a visionary leader with over 2 years of experience in the tech industry.',
  },
  {
    id: 2,
    name: 'Nishant Jaiswal',
    role: 'Founder',
    image: 'https://via.placeholder.com/150',
    bio: 'Nishant specializes in developing innovative solutions and managing tech teams.',
  },
  {
    id: 3,
    name: 'Laxmi Rajput',
    role: 'Business Analytics',
    image: 'https://via.placeholder.com/150',
    bio: 'Laxmi is passionate about business managemnt.',
  },
];

function AboutPage() {
  return (
    <div className="about-container">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>
          Welcome to our company! We are dedicated to delivering exceptional services and
          creating impactful solutions for our clients.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To innovate and provide world-class technology solutions that empower businesses to
          achieve their goals and exceed expectations.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
            <div className="circle">
  <img src={logo} alt={member.name} />
</div>

              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p className="bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
