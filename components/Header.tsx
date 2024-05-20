import Link from 'next/link';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#000', padding: '10px 20px', textAlign: 'center' }}>
      <nav>
        <Link href="#home" passHref><span>Home</span></Link>
        <Link href="#projects" passHref><span>Projects</span></Link>
        <Link href="#contact" passHref><span>Contact</span></Link>
      </nav>
    </header>
  );
};

export default Header;
