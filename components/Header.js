import routerEvents from 'next-router-events';
import NProgress from 'nprogress';
import styled from 'styled-components';
import ResponsiveNav from './ResponsiveNav';

routerEvents.on('routeChangeStart', () => {
  NProgress.start();
});
routerEvents.on('routeChangeComplete', () => {
  NProgress.done();
});
routerEvents.on('routeChangeError', () => {
  NProgress.done();
});

const StyleHeader = styled.header`
  position: fixed;
  background: ${props => props.theme.white};
  width: 100%;
  z-index: 3000;
  top: 0;
  nav {
    text-align: center;
    background: ${props => props.theme.white};
    position: relative;
    display: grid;
  }
  @media screen and (min-width: 768px) {
    div {
      max-width: 75rem;
      margin: 0 auto;
    }
  }
  nav.activities {
    position: relative;
    z-index: 1;
    max-width: 60rem;
    margin: 0 auto;
  }
  ul {
    display: table;
    justify-content: space-between;
  }
  nav > ul {
    padding: 4px 16px;
    margin: 0;
  }
  li {
    display: table-cell;
    vertical-align: middle;
    padding: 6px 8px;
  }
  a {
    color: ${props => props.theme.red};
    font-size: 1em;
  }
  .activities a {
    text-decoration: none;
    font-size: 1em;
  }
  a:hover,
  .activities a:hover {
    text-decoration: underline;
  }
  img {
    float: left;
  }
`;

const Header = props => (
  <StyleHeader>
    {props.activities ? (
      'Hola'
    ) : (
      <div>
        <ResponsiveNav />
      </div>
    )}
  </StyleHeader>
);

export default Header;
