import styled from 'styled-components';

const BasicPageStyles = styled.div`
  .hero {
    width: 100%;
    height: 100vh;
  }
  .hero.no--no-height {
    height: 100%;
    padding-bottom: 3.125rem;
  }
  .hero.no--no-height.slider {
    padding-bottom: 0;
  }
  .with-video {
    height: 100vh;
  }
  @media screen and (max-width: 823px) {
    .hero.no-height {
      height: 100%;
      padding-bottom: 3.125rem;
    }
    .with-video {
      height: 50vh;
    }
  }
  h1,
  h2 {
    font-weight: normal;
  }
  .brown {
    background: ${props => props.theme.lightBrown};
    color: ${props => props.theme.green};
  }
  .red-hero {
    background: ${props => props.theme.red};
    color: ${props => props.theme.white};
  }
  .hero.with-img {
    height: 100%;
  }
  .title,
  .subtitle,
  .lead {
    margin: 0;
    width: 100%;
  }
  .title {
    padding-top: 1.125rem;
    padding-bottom: 1.125rem;
    line-height: 1.25;
    font-size: 1.875em;
  }
  .title + p {
    margin: 0;
  }
  .subtitle {
    padding-top: 2.083em;
    line-height: 1.15;
    font-size: 1.25em;
  }
  .lead {
    padding-top: 1.8083em;
    line-height: 1;
    font-size: 1.15em;
  }
  .carousel .slide {
    background: none !important;
    text-align: left !important;
  }
  @media screen and (min-width: 768px) {
    .title {
      padding-top: 3.5rem;
      font-size: 4.5rem;
    }
    .subtitle {
      padding-top: 5rem;
      line-height: 1.15;
      font-size: 3rem;
    }
    .lead {
      padding-top: 3.3rem;
      line-height: 1;
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 1024px) {
    .slide .title {
      font-size: 5.5rem;
    }
  }
  .title,
  .description,
  .subtitle,
  .lead,
  .card-title,
  .card-location-time,
  .card-type {
    text-align: center;
  }
  .card-place,
  .list-place {
    text-transform: uppercase;
  }
  .carousel.carousel-slider .control-arrow {
    color: ${props => props.theme.green} !important;
    opacity: 1 !important;
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid ${props => props.theme.green};
  }
  .carousel .control-next.control-arrow:before {
    border-left: 8px solid ${props => props.theme.green};
  }
  .carousel.carousel-slider .control-arrow:hover {
    background: none !important;
  }

  .slide .title,
  .slide .subtitle,
  .slide .card-location-time {
    text-align: left;
    padding: 0.25em 0 0.1em 0;
  }
  .slide .title {
    line-height: 1;
  }
  .slide .card-title {
    font-size: 1em;
  }
  .slide .card-place {
    text-transform: none;
  }
  .slide .draw {
    position: absolute;
    right: 0;
    z-index: 3000;
  }
  .slide .draw a {
    display: block;
  }
  .slide .draw .globus-draw {
    width: 65px;
    height: 65px;
  }
  @media screen and (min-width: 768px) {
    .slide .draw .globus-draw {
      width: 140px;
      height: 140px;
    }
  }
  .brown .slide .card-location-time,
  .brown .slide .title,
  .card-title,
  .card-type,
  .card-location.featured,
  .activity-filter-button {
    color: ${props => props.theme.red};
  }
  .activity-filter-button.calendar {
    color: ${props => props.theme.green};
    text-decoration: none;
    text-align: center;
  }
  .card-title,
  .list-title,
  .day-of-list h2 {
    text-transform: uppercase;
    font-family: 'Fugue';
    font-size: 1.2em;
  }
  .list-title {
    text-transform: none;
  }
  .card-location,
  .list-location {
    font-family: 'Fugue';
    font-weight: normal;
  }
  .align-left {
    text-align: left;
  }
  .align-center {
    text-align: center;
  }
  .align-right {
    text-align: right;
  }
  img {
    max-width: 100%;
    height: 100%;
  }
  picture img {
    width: 100%;
  }
  .duotone-img {
    -webkit-filter: url(#duotone);
    filter: url(#duotone);
  }
  .card img {
    vertical-align: top;
  }
  .card.featured img {
    vertical-align: bottom;
  }
  .activity-filter-button {
    border: 0;
    padding: 0;
    background: none;
    font-size: 1em;
  }
  .activity-filter-button:hover,
  .active.activity-filter-button {
    text-decoration: underline;
    text-decoration-color: ${props => props.theme.red};
    cursor: pointer;
  }
  .active.activity-filter-button {
    text-decoration: none;
    color: ${props => props.theme.green};
    font-weight: bold;
    cursor: pointer;
  }
  .active.activity-filter-button {
    cursor: normal;
  }
  button.activity-filter-button:focus {
    outline: 0;
  }
  .fade-in {
    animation-name: fadeIn;
    animation-duration: 1.3s;
    animation-timing-function: cubic-bezier(0, 0, 0.4, 1);
    animation-fill-mode: forwards;
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .fade-out {
    animation-name: fadeOut;
    animation-duration: 1.3s;
    animation-timing-function: cubic-bezier(0, 0, 0.4, 1);
    animation-fill-mode: forwards;
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  .bases {
    margin: 0 auto;
    padding: 1em 0.5em;
    h1 {
      text-align: center;
      font-size: 2em;
    }
    h2,
    h3 {
      font-family: 'Fugue', sans-serif;
    }
    h3 {
      font-weight: normal;
      text-transform: uppercase;
    }
  }
  .row {
    max-width: 100%;
    margin: 0 0.5em 40px;
    display: grid;
    justify-content: space-between;
    align-items: flex-start;
  }
  .row.sm-12 {
    grid-template-columns: 1fr;
  }
  .row.sm-6 {
    grid-template-columns: 1fr 1fr;
  }
  .row.sm-4 {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    .row.md-12 {
      grid-template-columns: 1fr;
    }
    .row.md-6 {
      grid-template-columns: 1fr 1fr;
    }
    .row.md-2-3 {
      grid-template-columns: 1fr 2fr;
    }
    .row.md-4 {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1024px) {
    .bases {
      max-width: 45rem;
    }
    .row {
      margin: 0 auto 40px;
    }
    .row.sm-12 {
      max-width: 60rem;
      margin: 0 auto 0.5em auto;
    }
    .row.lg-12 {
      grid-template-columns: 1fr;
    }
    .row.lg-6 {
      grid-template-columns: 1fr 1fr;
    }
    .row.lg-4 {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .row.lg-3 {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1280px) {
    .row.sm-12,
    .row.sm-6,
    .row.sm-4 {
      max-width: 75rem;
    }
    .row.xl-12 {
      grid-template-columns: 1fr;
    }
    .row.xl-6 {
      grid-template-columns: 1fr 1fr;
    }
    .row.xl-4 {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .row.xl-3 {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .row.xl-2 {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    .row.xl-2-3 {
      grid-template-columns: 1fr 2fr;
    }
    .row.xl-7-c {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
  .card {
    text-align: left;
    text-decoration: none;
    background: ${props => props.theme.lightBrown};
    margin-bottom: 0.5em;
  }
  .card.featured {
    background: url('/static/bg-card-featured-left.png') no-repeat top left,
      url('/static/bg-card-featured-right.png') no-repeat top right;
    background-color: ${props => props.theme.lightBrown};
  }
  .card p,
  .card h2,
  .list p,
  .list h2 {
    margin: 0;
  }
  .card p {
    padding: 18px 18px 24px;
  }
  .card h2 {
    padding: 10px 10px 0;
  }
  .card.featured h2 {
    margin: 0 40px;
  }
  .card a,
  nav.file-navigation a,
  .bases a {
    text-decoration: none !important;
  }
  nav.file-navigation a:hover,
  .bases a:hover {
    text-decoration: underline !important;
  }
  nav.file-navigation a,
  .bases a {
    color: ${props => props.theme.green};
  }
  .icona-mes,
  .icona-mes-blanca {
    margin: 0.5em auto;
    max-width: 76rem;
  }
  .icona-mes {
    background: url('/static/icona-mes.png') repeat-x top left,
      url('/static/icona-mes.png') repeat-x bottom left;
  }
  .icona-mes-blanca {
    background: url('/static/icona-mes-blanca.png') repeat-x top left;
  }
  .icona-mes div:first-child {
    padding: 2em 0 8em;
  }
  .red-hero .icona-mes-blanca {
    position: relative;
    top: 1em;
  }
  .red-hero .icona-mes-blanca .subtitle {
    padding-top: 1em;
  }
  .slider .icona-mes div:first-child,
  .slider .icona-mes-blanca div:first-child,
  .icona-mes .bases div:first-child {
    padding: 2em 0.5em 1em;
  }
  @media screen and (max-width: 767px) {
    .row.sm-6 .card:nth-child(odd) {
      padding: 0 5px 0 0;
    }
    .row.sm-6 .card:nth-child(even) {
      padding: 0 0 0 5px;
    }
  }
  .card figure.top {
    margin: 0 0 1em;
    padding: 0;
  }
  .card figure.bottom {
    margin: 0 0 0;
    padding: 0;
  }
  .card.featured figure.bottom {
    background: url('/static/bg-card-featured-left.png') no-repeat bottom left,
      url('/static/bg-card-featured-right.png') no-repeat bottom right;
    position: relative;
  }
  .slide-img figure.bottom {
    position: relative;
  }
  .card.featured figure img.img-back,
  .slide-img figure img.img-back {
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }
  .card.featured figure:hover img.img-back,
  .slide-img figure:hover img.img-back {
    cursor: pointer;
    display: block;
  }
  .day-of-list,
  .list {
    padding-bottom: 0.5em;
    margin: 1em 2em;
    border-bottom: 1px dashed ${props => props.theme.green};
  }
  .day-of-list {
    padding-top: 0.5em;
    border-top: 2px solid ${props => props.theme.green};
    border-bottom: 2px solid ${props => props.theme.green};
  }
  .day-of-list h2 {
    margin: 0;
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    .card {
      margin: 0.6em 0.3em 0 0.3em;
    }
    .card main {
      min-height: 23vh;
      padding-top: 1em;
    }
    .card main.featured {
      margin-top: 1em;
      min-height: 15vh;
    }
    .card main p {
      padding: 0;
    }
    .day-of-list {
      margin-top: 0;
    }
    @media screen and (min-aspect-ratio: 9/16) {
      .event-list {
        max-height: 30vh;
        overflow-y: scroll;
      }
    }
    @media screen and (min-aspect-ratio: 16/9) {
      .event-list {
        max-height: 45vh;
        overflow-y: scroll;
      }
    }
  }
  hr {
    width: 80%;
  }
`;

export default BasicPageStyles;
