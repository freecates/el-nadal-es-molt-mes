import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
  img {
    width: 25px;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 76px;
    }
  }
`;

const Title = props => (
  <StyledTitle>
    <h1 className="title">
      <img
        loading="lazy"
        src="/static/bg-title-left.png"
        alt="senefa decorativa"
        width="76"
        height="76"
      />
      {props.title}
      <img
        loading="lazy"
        src="/static/bg-title-right.png"
        alt="senefa decorativa"
        width="76"
        height="76"
      />
    </h1>
  </StyledTitle>
);

export default Title;
