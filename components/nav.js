import React from 'react';
import styled from 'styled-components';
import ActiveLink from './ActiveLink';

const NavLink = styled.a`
  cursor: pointer;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
`;
const links = [
  { href: '/activitats', label: 'Més propostes' },
  { href: '/postal', label: 'Envia una postal' },
  { href: '/sorteig', label: 'Sorteig' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = props => (
  <nav>
    <ul>
      <li>
        <NavLink href={'/'} title="Inici">
          <img
            src="/static/logo-diputacio-barcelona-nadal-es-molt-mes.png"
            alt="Logo Diputació de Barcelona | Barcelona és molt més"
          />
        </NavLink>
      </li>
      {props.withHome && (
        <li>
          <NavLink href={'/'} title="Inici">
            Inici
          </NavLink>
        </li>
      )}
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <ActiveLink href={href}>
            <NavLink>{label}</NavLink>
          </ActiveLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
