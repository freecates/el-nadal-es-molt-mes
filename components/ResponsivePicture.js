import React from 'react';

const ResponsivePicture = props => {
  return (
    <picture className="fade-in">
      <source
        type="image/jpg"
        srcSet={props.image480}
        media="(max-width: 420px)"
        width="480"
        height="640"
      />
      <source
        type="image/jpg"
        srcSet={props.image768}
        media="(max-width: 768px)"
        width="768"
        height="1024"
      />
      <source
        type="image/jpg"
        srcSet={props.image}
        media="(min-width: 1024px)"
        width="1280"
        height="720"
      />
      <img
        loading="lazy"
        src={props.image}
        alt={props.imageAlt}
        width="1280"
        height="720"
      />
    </picture>
  );
};

export default ResponsivePicture;
