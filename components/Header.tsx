import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
      </nav>
    </header>
  );
};

export default Header;
