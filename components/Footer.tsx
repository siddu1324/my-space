import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px 0', marginTop: 'auto', backgroundColor: '#111', color: 'white' }}>
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <p>Connect with me on <Link href="https://www.linkedin.com/in/your-profile" legacyBehavior><a style={{ color: '#0a66c2' }}>LinkedIn</a></Link></p>
      <p>Designed by Your Name</p>
    </footer>
  );
};

export default Footer;
