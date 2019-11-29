import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

const theme = {
  white: '#ffffff',
  maxWidth: '100%',
  width: '100%',
  black: '#000000',
  red: '#e7332d',
  green: '#146e50',
  lightBrown: '#f3f5e7'
};

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  max-width: 100%;
  width: 100%;
  color: ${props => props.theme.green};
`;

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'ITC Grouch';
  src: url('/static/fonts/GrouchITCbyBT-Regular.woff2') format('woff2'),
      url('/static/fonts/GrouchITCbyBT-Regular.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}

@font-face {
    font-family: 'FugueHead';
    src: url('/static/fonts/FugueHead.woff2') format('woff2'),
        url('/static/fonts/FugueHead.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Fugue';
    src: url('/static/fonts/Fugue-Italic.woff2') format('woff2'),
        url('Fugue-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Fugue';
    src: url('/static/fonts/Fugue-Regular.woff2') format('woff2'),
        url('/static/fonts/Fugue-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

html {
  box-sizing:border-box;
  padding:0;
  margin: 0;
}
*, *:before, *:after {
  box-sizing:inherit;
}
body, button {
    margin: 0;
    font-family: 'Fugue', sans-serif;
    font-size: 1.125rem;
    padding: 0;
    font-weight: normal;
    font-style: normal;
}
h1, h2, h3, h4, h5, h6 {
  font-family:'ITC Grouch', serif;
}
a, .red {
  color:${props => props.theme.red};
}
.white {
  color:${props => props.theme.white};
}
.button {
  padding:1em;
  border:1px solid;
  text-transform:uppercase;
  text-decoration:none;
  margin:.5em 0;
  display: inline-block;
  letter-spacing:.25em;
}
a.black-anchor {
  color:${props => props.theme.black}!important;
}
a:hover {
  text-decoration:none;
}
.no-uppercase {
  text-transform:none;
}
.no-spacing {
  letter-spacing: normal;
}`;

export default function Page(props) {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Meta />
        <Header />
        {props.children}
        <Footer />
        <GlobalStyles />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
      </StyledPage>
    </ThemeProvider>
  );
}
