import React from 'react';

import '../App.css'

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Create responsive and modern websites for your business.',
    icon: '🌐',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Build high-performance mobile apps for Android and iOS.',
    icon: '📱',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Design visually appealing and user-friendly interfaces.',
    icon: '🎨',
  },
  {
    id: 4,
    title: 'SEO Optimization',
    description: 'Improve your website’s visibility on search engines.',
    icon: '🔍',
  },
];

function ServicePage() {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <p>We provide a wide range of services to meet your business needs.</p>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicePage;
