// src/pages/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

import deepakImg from '../assets/deepak.jpeg';
import somuImg from '../assets/somu1.jpeg';
import kundanImg from '../assets/kundan1.jpeg';
import sureshImg from '../assets/suresh.jpeg';
import naveenImg from '../assets/naveen.jpeg';
import mitthuImg from '../assets/mitthu.jpeg';
import krishnaImg from '../assets/krishna.jpeg';
import alakeshImg from '../assets/alakesh.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const personalities = [
    {
      name: "Deepak",
      image: deepakImg,
      description: "And here we have Deepak da, the only man who thinks water is just a mixer gone wrong. 🍻 He doesn’t need GPS—he staggers in circles until he finds home! Last seen passionately debating a lamppost about how Buddha was born in Nepal.",
    },
    {
      name: "Somu",
      image: somuImg,
      description: "Here’s our in-house IT guy—he can build a PC blindfolded but can’t find his own shoes right now. 🖥️ He tried to fix someone’s broken vibe with a USB cable. Last seen trying to manage another heated debate like it was a BIOS issue.",
    },
    {
      name: "Kundan",
      image: kundanImg,
      description: "Here comes Kundan Prasad, aka KP — the CEO of Every Group Discussion Ever. 🧠 Whether it’s politics, finance, or why there’s no non-veg chakhna—he’s already leading the panel. Last seen declaring 'My way or highway!' like it’s a national policy.",
    },
    {
      name: "Suresh",
      image: sureshImg,
      description: "Presenting Suresh — the undisputed Chairman of the Dam-side Drinking Committee. 🪑 He doesn’t do sports, movies, or outings... his favorite action scene is watching ice melt in his glass. Last seen lying down mid-conversation, claiming he's conserving energy for future naps.",
    },
    {
      name: "Naveen",
      image: naveenImg,
      description: "Meet Mr. druggist Tower—acting sober while his eyes are buffering. 🧐 He’s holding a glass, an iphone, and everyone's dignity in one shaky hand. Last seen telling the bouncer, ‘They’re not drunk, they’re just emotionally expressive!",
    },
    {
      name: "Mitthu",
      image: mitthuImg,
      description: "Meet the mystery man of the group — silent like a monk until pack number two kicks in. 🍻 Then boom — he transforms into the headline act, becomes a walking conspiracy theory. 🍺but his ‘impossible’ talks have us crying with laughter. Last seen explaining how he once almost joined RAW… but got busy with tea.",
    },
    {
      name: "Krishna",
      image: krishnaImg,
      description: "Here comes the self-declared Dam Incharge — one glitter in the water and he’s scanning it like CID just called him in. 💦 Touch his dam setup and you'll trigger his third eye. Famous for saying: ‘I use to drink blood and alcohol according to my wish’ — and somehow we all believe it.",
    },
    {
      name: "Alakesh",
      image: alakeshImg,
      description: "'Mein bewra nhi hu'- I whisper to myself, holding a glass like it’s a microphone. Every bottle: ‘Lies. Sweet lies.",
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>The Brotherhood of the Bottles</h2>
        <button
          onClick={() => navigate('/gallery')}
          style={{
            padding: '10px 15px',
            border: 'none',
            backgroundColor: '#007bff',
            color: '#fff',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          View Gallery
        </button>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {personalities.map((person, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '10px', padding: '10px', width: '250px' }}>
            <img src={person.image} alt={person.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{person.name}</h3>
            <p>{person.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
