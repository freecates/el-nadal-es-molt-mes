import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Nav from './nav';
import SideBar from './Sidebar';

const ResponsiveNav = props => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)',
  });
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 823px)',
  });

  return (
    <>
      {isDesktopOrLaptop && <Nav withHome />}
      {isTabletOrMobileDevice && (
        <div>
          <a href={'/'} title='Inici'>
            <img
              src='/static/logo-diputacio-barcelona-nadal-es-molt-mes.png'
              alt='Logo Diputació de Barcelona | Barcelona és molt més'
              loading='lazy'
              width='281'
              height='56'
            />
          </a>
          <SideBar withHome />
        </div>
      )}
    </>
  );
};

export default ResponsiveNav;
