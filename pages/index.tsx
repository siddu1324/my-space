import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Image from 'next/image';

const texts = ["Hello, I'm Siddhartha Reddy 👋", "I am a developer", "Pursuing Computer Science at University of Missouri"];
const Home: React.FC = () => {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % texts.length);
    }, 8000); // Change text every 8 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="typewriter">
        <h1>{texts[index]}</h1>
      </div>
      
      <div className="gallery">
  <Image src="/image1.jpeg" alt="Description" width={300} height={200} objectFit="cover" />
  <Image src="/image2.jpeg" alt="Description" width={300} height={200} objectFit="cover" />
  <Image src="/image3.jpeg" alt="Description" width={300} height={200} objectFit="cover" />
</div>

    </Layout>
  );
};

export default Home;
