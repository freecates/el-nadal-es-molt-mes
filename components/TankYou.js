import styled from 'styled-components';

const StyledThanks = styled.section`
  background-color: ${props => props.theme.red};
  padding: 2em;
  text-align: center;
  margin: 0 auto;
  a {
    color: ${props => props.theme.white};
  }
  @media screen and (min-width: 768px) {
    max-width: 32rem;
  }
`;
const ThankYou = props => {
  const buttons = props.buttons;
  return (
    <StyledThanks>
      <div className='fade-in'>
        <h1>Gràcies i molta sort!</h1>
        <p>
          <small>
            Hem desat les teves dades de participació. En cas de ser el
            guanyador/-a, ens posarem en contacte amb tu via correu-e. Recorda
            subscriure't a algun dels nostres butlletins (o als tres!):{' '}
            {buttons.map((button, index) => (
              <>
                <span key={button.buttonTitle}>
                  <a target='_blank' rel='noopener' href={button.url}>
                    {index == 2
                      ? `${button.buttonTitle}`
                      : String.fromCharCode(171) +
                        `${button.buttonSubtitle}` +
                        String.fromCharCode(187)}
                  </a>
                </span>{' '}
              </>
            ))}
            per poder accedir al premi
          </small>
        </p>
      </div>
    </StyledThanks>
  );
};

export default ThankYou;
