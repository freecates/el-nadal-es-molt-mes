import axios from 'axios';
import validator from 'email-validator';
import Link from 'next/link';
import React, { Component } from 'react';
import styled from 'styled-components';
import ThankYou from './TankYou';

const StyledForm = styled.section`
  input[type='text'] {
    @media screen and (min-width: 768px) {
      width: 25%;
    }
    font-family: 'Fugue', sans-serif;
    font-size: 1em;
    display: block;
    margin: 1em auto;
    padding-top: 0.5em;
    color: ${props => props.theme.red};
    padding-left: 0.5em;
    ::placeholder {
      color: ${props => props.theme.red};
      opacity: 1;
    }
  }
  .button {
    background-color: ${props => props.theme.red};
    color: white;
    text-decoration: none;
    display: inline-block;
    margin-top: 1em;
    cursor: pointer;
  }
  .button[disabled] {
    cursor:not-allowed;
  }
  input[type='checkbox'] {
    width: 15px;
    height: 15px;
  }
  .white {
    color: ${props => props.theme.white};
  }
`;

const formUrl =
  'https://script.google.com/macros/s/AKfycbxEW1qPVPp6cXIR9tLS5rFv76qTyxB0XToMuoflXcAbOZ99f0qb/exec';

class SubscriptionForm extends Component {
  render() {
    const showEmailError = this.emailNode && !this.props.emailIsValid;
    return (
      <StyledForm>
        <form
          onChange={this.props.onChange}
          onSubmit={this.props.onSubmit}
          onAccepted={this.props.isAccepted}>
          <label htmlFor='name'>
            <input type='text' name='name' id='name' placeholder='Nom' />
          </label>
          <label htmlFor='email'>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Correu-e'
              className={`${showEmailError ? 'error' : ''}`}
              ref={node => (this.emailNode = node)}
            />
          </label>
          <label>
            <small>
              <Link href='/bases'>
                <a className='white'>Consulta les bases</a>
              </Link>
            </small>
          </label>
          <br />
          <label htmlFor='accept'>
            <input type='checkbox' name='isAccepted' id='isAccepted' />
            <small>Accepto les bases del concurs</small>
          </label>
          <br />

          <button
            className='button'
            disabled={!this.props.emailIsValid || !this.props.isAccepted}>
            Participa-hi!
          </button>
        </form>
      </StyledForm>
    );
  }
}

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      emailIsValid: false,
      submitted: false,
      isAccepted: false,
      buttons: this.props.buttons,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  validateEmail = () => {
    this.setState({ emailIsValid: validator.validate(this.state.email) });
  };

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
    this.validateEmail();
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, email } = this.state;

    axios({
      method: 'get',
      url: `${formUrl}?name=${encodeURIComponent(
        name
      )}&email=${encodeURIComponent(email)}`,
    });

    this.setState({ submitted: true });
  };

  render() {
    const { emailIsValid, submitted, isAccepted } = this.state;

    return (
      <div className='align-center'>
        {submitted ? (
          <ThankYou buttons={this.state.buttons} />
        ) : (
          <SubscriptionForm
            onChange={this.handleInputChange}
            onSubmit={this.handleSubmit}
            emailIsValid={emailIsValid}
            isAccepted={isAccepted}
          />
        )}
      </div>
    );
  }
}

export default AppForm;
