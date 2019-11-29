import * as React from 'react';

const PostalsForm = props => {
  return (
    <div className="form">
      <label className="max-length-text">
        ESCRIU EL TEU MISSATGE
        <br />
        (màxim 100 caràcters)
      </label>
      <div className="form__inputs">
        {/* Input for the text at the top */}
        {/* <input
          name="text-top"
          placeholder="Text top"
          type="text"
          value={props.textTop}
          onChange={props.handleInputChange}
        /> */}
        {/* Input for the text at the bottom */}
        <textarea
          name="text-bottom"
          placeholder="Escriu la felicitació"
          type="text"
          value={props.textBottom}
          onChange={props.handleInputChange}
          maxLength="100"
          rows="5"
          cols="40"
        />
      </div>
      <div className="form__btns">
        {/* Button to load random image from api.imgflip.com */}
        <button
          className="btn btn-primary"
          type="button"
          onClick={props.handleImageChange}
        >
          Canvia de postal
        </button>
        {/* 'Button' to load image from disk */}
        {/* <label className="btn btn-primary" htmlFor="fileInput">
          Carrega la imatge
          <input
            id="fileInput"
            name="fileInput"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={props.handleImageInputChange}
            hidden
          />
        </label> */}
        {/* Button to generate png image of the meme */}
        <button
          className="btn btn-primary"
          type="button"
          onClick={props.handleMemeGeneration}
        >
          Genera la postal
        </button>
        {/* Button to remove the meme image from the DOM */}
        {props.isMemeGenerated && (
          <button
            className="btn btn-danger"
            type="button"
            onClick={props.handleMemeReset}
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};
export default PostalsForm;
