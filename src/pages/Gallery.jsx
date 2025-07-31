// src/pages/Gallery.jsx
import { useNavigate } from 'react-router-dom';
import React from 'react';

import deepakImg from '../assets/deepak.jpeg';
import somuImg from '../assets/somu1.jpeg';
import kundanImg from '../assets/kundan1.jpeg';
import sureshImg from '../assets/suresh.jpeg';
import naveenImg from '../assets/naveen.jpeg';
import mitthuImg from '../assets/mitthu.jpeg';
import krishnaImg from '../assets/krishna.jpeg';
import alakeshImg from '../assets/alakesh.jpeg';

const Gallery = () => {
  const navigate = useNavigate();

  const images = [
    { name: "Deepak", src: deepakImg },
    { name: "Somu", src: somuImg },
    { name: "Kundan", src: kundanImg },
    { name: "Suresh", src: sureshImg },
    { name: "Naveen", src: naveenImg },
    { name: "Mitthu", src: mitthuImg },
    { name: "Krishna", src: krishnaImg },
    { name: "Alakesh", src: alakeshImg },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
      }}>
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#333',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            margin: 0
          }}
        >
          Gallery of Brotherhood
        </h2>
        <button
          onClick={() => navigate('/home')}
          style={{
            padding: '10px 16px',
            fontSize: '1rem',
            backgroundColor: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#125aa2'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1976d2'}
        >
          Go Back to Home
        </button>
      </div>

      <div style={{
        padding: '40px 20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '24px',
          width: '100%',
          maxWidth: '1200px',
        }}>
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <img
                src={img.src}
                alt={img.name}
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
              <h4 style={{ padding: '10px' }}>{img.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
