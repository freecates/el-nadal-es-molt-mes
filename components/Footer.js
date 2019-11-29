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
    li {
      display: flex;
      padding: 6px 8px;
    }
  }
  nav > ul {
    padding: 4px 16px;
    margin: 0;
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
          <a href="https://diba.cat/" target="_blank">
            <img
              src="/static/logo-footer-diputacio-barcelona-nadal-es-molt-mes.png"
              alt="Logo Diputació de Barcelona | Barcelona és molt més"
            />
          </a>
        </li>
        <li>#DibaOberta #NadalÉsMoltMés #dibacat #BCNmoltmes</li>
        <li>
          <a href="https://twitter.com/diba" target="_blank">
            <img
              src="/static/twitter-footer-diputacio-barcelona-nadal-es-molt-mes.png"
              alt="Logo Twitter Diputació de Barcelona | Barcelona és molt més"
            />
          </a>
          <a
            href="https://www.facebook.com/DiputaciodeBarcelona"
            target="_blank"
          >
            <img
              src="/static/fb-footer-diputacio-barcelona-nadal-es-molt-mes.png"
              alt="Logo Facebook Diputació de Barcelona | Barcelona és molt més"
            />
          </a>
          <a href="https://www.instagram.com/dibacat/" target="_blank">
            <img
              src="/static/instagram-footer-diputacio-barcelona-nadal-es-molt-mes.png"
              alt="Logo Instagram Diputació de Barcelona | Barcelona és molt més"
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCmWbSMykPhTvwamAI7uGBYA"
            target="_blank"
          >
            <img
              src="/static/youtube-footer-diputacio-barcelona-nadal-es-molt-mes.png"
              alt="Logo Youtube Diputació de Barcelona | Barcelona és molt més"
            />
          </a>
        </li>
      </ul>
    </nav>
  </StyleFooter>
);

export default Footer;
