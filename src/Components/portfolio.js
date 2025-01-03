import React from 'react';
import '../App.css'; // Import the CSS for styling
import web from '../assets/web.png'
const Portfolio = () => {
    // Sample data
    const portfolioItems = [
      {
        id: 1,
        title: 'Mobile App Design',
        description: 'A sleek mobile app design for e-commerce.',
        image: 'mobile-app.jpg',
        pdf: 'mobile-app-design.pdf',
      },
      {
        id: 2,
        title: 'Website Design',
        description: 'A modern and responsive website layout.',
        image: 'website-design.jpg',
        pdf: 'https://drive.google.com/file/d/1eVYxlQYw5XURgT1d9NbP8KLSerBrLosO/view?usp=sharing',
      },
      {
        id: 3,
        title: 'UI Test Cases',
        description: 'Test cases for UI usability and responsiveness.',
        image: 'ui-test-cases.jpg',
        pdf: 'ui-test-cases.pdf',
      },
      // Add more items as needed
    ];
  
    return (
      <div className="portfolio-container">
        <h1>Portfolio</h1>
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <img src={web} alt={item.title} className="portfolio-image" />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-pdf-link"
              >
                View PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;
