import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Projects from './projects';
import Image from 'next/image';

const Home: React.FC = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const fullTexts = ["Hello, I'm Siddhartha Reddy 👋", "I am a developer"];
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (index < fullTexts[textIndex].length) {
      setTimeout(() => {
        setText(text + fullTexts[textIndex][index]);
        setIndex(index + 1);
      }, 100); // Speed of typing
    } else {
      setTimeout(() => {
        setText('');
        setIndex(0);
        setTextIndex((textIndex + 1) % fullTexts.length);
      }, 2000); // Wait before restarting the effect
    }
  }, [index, text, textIndex]);

  return (
    <Layout>
      
      <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h1 style={{ fontWeight: 'normal', margin: '0 0 20px 0', fontSize: '2.5rem', whiteSpace: 'nowrap', overflow: 'hidden', borderRight: '3px solid orange', paddingRight: '5px' }}>{text}</h1>
        <p>I am currently a Sophomore at University of Missouri St. Louis pursuing Computer Science.</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
          <Image src="/image1.jpeg" alt="Description" width={300} height={200} objectFit="cover" />
          <Image src="/image2.jpeg" alt="Description" width={300} height={200} objectFit="cover" />
          <Image src="/image3.jpeg" alt="Description" width={300} height={200} objectFit="cover" />
        </div>
      </div>
      <div id="projects" style={{ padding: '50px 0' }}>
        <Projects />
      </div>
      {/* Contact Section */}
      <section style={{ width: '100%', textAlign: 'center', padding: '50px 0' }}>
        <h2>Contact Me</h2>
        <form style={{ maxWidth: '500px', margin: '0 auto' }}>
          <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <input type="email" placeholder="Your Email" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <textarea placeholder="Your Message" style={{ width: '100%', height: '150px', padding: '10px', marginBottom: '10px' }}></textarea>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0a84ff', color: 'white', border: 'none', cursor: 'pointer' }}>Send</button>
        </form>
      </section>
    </Layout>
  );
};

export default Home;
