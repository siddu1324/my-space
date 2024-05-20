import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => (
  <header style={{ textAlign: 'center', width: '100%', backgroundColor: '#000' }}>
    <nav>
      <Link href="/">home</Link>
      <Link href="/work">work</Link>
      <Link href="/blog">blog</Link>
      <Link href="/guestbook">guestbook</Link>
    </nav>
  </header>
);

export default Header;
