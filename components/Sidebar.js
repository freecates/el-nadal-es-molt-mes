import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
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

const StyledSideBar = styled.div`
  padding: 3em 0 0;
  .bm-item:hover {
    color: white;
  }
  .bm-burger-button {
    position: fixed;
    width: 18px;
    height: 15px;
    right: 18px;
    top: 18px;
  }
  .bm-burger-bars {
    background: #373a47;
  }
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }
  .bm-cross {
    background: #000000;
  }
  .bm-menu {
    padding: 0;
  }
  .bm-morph-shape {
    fill: #373a47;
  }

  li {
    display: block !important;
    text-align: left !important;
  }
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Sidebar = props => {
  const [state, setState] = useState({ menuOpen: false });
  const handleStateChange = state => {
    setState({ menuOpen: state.isOpen });
  };
  const closeMenu = () => {
    setState({ menuOpen: false });
  };
  return (
    <StyledSideBar>
      <Menu
        left
        isOpen={state.menuOpen}
        onStateChange={state => handleStateChange(state)}
      >
        <ul>
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
                <NavLink onClick={() => closeMenu()}>{label}</NavLink>
              </ActiveLink>
            </li>
          ))}
        </ul>
      </Menu>
    </StyledSideBar>
  );
};

export default Sidebar;
