import * as React from 'react';

const PostalsContent = props => {
  return (
    <div className="content" ref={props.contentContainerRef}>
      {/* Image preview */}
      <img src={props.activeImage} alt="Postal" width="877" height="1240" />
      {/* Text at the top */}
      <h1>{props.textTop}</h1>
      {/* Text at the bottom */}
      <p>{props.textBottom}</p>
    </div>
  );
};
export default PostalsContent;
