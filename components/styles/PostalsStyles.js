import styled from 'styled-components';

const PostalsStyles = styled.section`
  /* Content */
  .content {
    position: relative;
  }
  img {
    object-fit: contain;
  }
  h1,
  p {
    position: absolute;
    margin: 0;
    width: 100%;
    /* text-shadow: 0px 0px 2px black; */
    line-height: 1;
    padding: 1em;
  }
  .max-length-text {
    margin: 0 0 1em;
    border-top: 2px solid ${props => props.theme.green};
    display: block;
    padding: 0.5em 0 0;
  }
  h1 {
    top: 16px;
  }
  p {
    bottom: 80px;
  }
  /* Form */
  .form {
    margin: 0 auto;
    max-width: 380px;
  }
  .form__inputs,
  .form__btns {
    display: flex;
    flex-flow: row nowrap;
  }
  .form__inputs {
    margin-bottom: 12px;
  }
  .form__inputs input,
  .form__btns .btn {
    border-radius: 2px;
  }
  .form__inputs input,
  .form__inputs textarea {
    padding: 8px;
    width: 100%;
    border: 2px solid ${props => props.theme.green};
  }
  .form__inputs input:focus,
  .form__inputs textarea:focus {
    outline-color: ${props => props.theme.green};
  }
  .form__inputs input + input,
  .form__btns .btn + .btn {
    margin-left: 12px;
  }
  .form__btns {
    justify-content: center;
  }
  .form__btns .btn {
    padding: 8px 12px;
    border: 1px solid ${props => props.theme.red};
    cursor: pointer;
    color: ${props => props.theme.red};
    transition: background 0.25s ease-in-out;
    text-transform: uppercase;
  }
  /* Buttons */
  .btn-primary {
    background: ${props => props.theme.white};
  }
  .btn-primary:hover {
    background: ${props => props.theme.lightBrown};
  }
  .btn.btn-danger {
    background: ${props => props.theme.red};
    color: ${props => props.theme.white};
  }
  .btn-danger:hover {
    background: #b02324;
  }
`;

export default PostalsStyles;
