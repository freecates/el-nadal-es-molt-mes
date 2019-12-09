import styled from 'styled-components';

const StyleFooter = styled.footer`
  background: ${props => props.theme.lightBrown};
  nav {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
    nav {
      max-width: 75rem;
      margin: 0 auto;
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media screen and (min-width: 1024px) {
    li {
      display: flex;
      padding: 6px 8px;
    }
    li span {
      margin-right: 1em;
    }
  }
  nav > ul {
    padding: 4px 16px;
    margin: 0;
  }
  li span {
    display: block;
  }
  li {
    list-style-type: none;
  }
  a {
    color: ${props => props.theme.green};
    text-decoration: none;
    font-size: 13px;
  }
  li img {
    max-width: 100%;
  }
`;

const Footer = props => (
  <StyleFooter>
    <nav>
      <ul>
        <li>
          <a href='https://diba.cat/' rel='noopener' target='_blank'>
            <img
              src='/static/logo-footer-diputacio-barcelona-nadal-es-molt-mes.png'
              alt='Logo Diputació de Barcelona | Barcelona és molt més'
              height='45'
              width='140'
              loading='lazy'
            />
          </a>
        </li>
        <li>
          <span>#DibaOberta</span>
          <span>#NadalÉsMoltMés</span>
          <span>#dibacat</span>
          <span>#BCNmoltmes</span>
        </li>
        <li>
          <a href='https://twitter.com/diba' rel='noopener' target='_blank'>
            <img
              src='/static/twitter-footer-diputacio-barcelona-nadal-es-molt-mes.png'
              alt='Logo Twitter Diputació de Barcelona | Barcelona és molt més'
              height='40'
              width='40'
              loading='lazy'
            />
          </a>
          <a
            href='https://www.facebook.com/DiputaciodeBarcelona'
            rel='noopener'
            target='_blank'>
            <img
              src='/static/fb-footer-diputacio-barcelona-nadal-es-molt-mes.png'
              alt='Logo Facebook Diputació de Barcelona | Barcelona és molt més'
              height='40'
              width='40'
              loading='lazy'
            />
          </a>
          <a
            href='https://www.instagram.com/dibacat/'
            rel='noopener'
            target='_blank'>
            <img
              src='/static/instagram-footer-diputacio-barcelona-nadal-es-molt-mes.png'
              alt='Logo Instagram Diputació de Barcelona | Barcelona és molt més'
              height='40'
              width='40'
              loading='lazy'
            />
          </a>
          <a
            href='https://www.youtube.com/channel/UCmWbSMykPhTvwamAI7uGBYA'
            rel='noopener'
            target='_blank'>
            <img
              src='/static/youtube-footer-diputacio-barcelona-nadal-es-molt-mes.png'
              alt='Logo Youtube Diputació de Barcelona | Barcelona és molt més'
              height='40'
              width='40'
              loading='lazy'
            />
          </a>
        </li>
      </ul>
    </nav>
  </StyleFooter>
);

export default Footer;
