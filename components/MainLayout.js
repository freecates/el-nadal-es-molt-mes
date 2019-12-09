import styled from 'styled-components';

const MainStyle = styled.main`
  max-width: 100%;
  max-width: ${props => props.theme.maxWidth};
  margin-top: 82px;
`;

export default function MainLayout(props) {
  return (
    <>
      {props.mainlayout && (
        <div className={'mainlayout' in props && 'mainlayout'}>
          <MainStyle>{props.children}</MainStyle>
        </div>
      )}
    </>
  );
}
