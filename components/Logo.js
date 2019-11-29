import Link from 'next/link';
import React from 'react';

const Logo = () => (
  <header className="description brown">
    <Link href="/">
      <a title="Inicio">
        <img
          loading="lazy"
          src="/static/logo-mexico-baila.png"
          alt="Logo Nadal és molt més"
        />
      </a>
    </Link>
  </header>
);

export default Logo;
