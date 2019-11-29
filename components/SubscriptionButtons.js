import styled from 'styled-components';

const StyleSubscriptionButtons = styled.section`
  text-align: center;
  div {
    text-align: center;
  }
  div > ul {
    padding: 4px 16px;
    margin: 0;
  }
  li {
    list-style: none;
  }
  a {
    color: ${props => props.theme.white};
    text-decoration: none;
    font-size: small;
  }
  @media screen and (min-width: 768px) {
    div {
      max-width: 40rem;
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
  @media screen and (min-width: 1024px) {
    div {
      max-width: 50rem;
      margin: 0 auto;
    }
    a {
      font-size: 1em;
    }
  }
`;

const SubscriptionButtons = props => {
  const buttons = props.buttons;
  return (
    <StyleSubscriptionButtons>
      <div>
        <ul>
          {buttons.map((button, index) => (
            <li key={button.buttonTitle}>
              <a
                target="_blank"
                rel="noopener"
                className="button no-uppercase no-spacing"
                href={button.url}
                title={`Clica aquí per subscriure't a: ${button.buttonTitle} ${button.buttonSubtitle}`}
              >
                {button.buttonTitle}
                <br />
                {index == 2
                  ? `${button.buttonSubtitle}`
                  : String.fromCharCode(171) +
                    `${button.buttonSubtitle}` +
                    String.fromCharCode(187)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </StyleSubscriptionButtons>
  );
};

export default SubscriptionButtons;
