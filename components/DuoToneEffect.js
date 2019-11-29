import styled from 'styled-components';

const DuoToneEffectStyle = styled.svg`
  position: absolute;
  height: 0;
  width: 0;
  overflow: none;
  left: -100%;
`;

const DuoToneEffect = props => (
  <DuoToneEffectStyle>
    <filter
      id="duotone"
      colorInterpolationFilters="sRGB"
      x="0"
      y="0"
      height="100%"
      width="100%"
    >
      {props.duo && (
        <feColorMatrix
          type="matrix"
          values="0.87 0 0 0  0.08 
                0 0.53 0 0  0.43  
                0 0 0.60 0  0.31 
                0  0 0 1  0"
        />
      )}

      {props.single && (
        <feColorMatrix
          type="matrix"
          values="0.92 0 0 0  0.08 
                      0 0.57 0 0  0.43  
                      0 0 0.69 0  0.31 
                      0  0 0 1  0"
        />
      )}
    </filter>
  </DuoToneEffectStyle>
);

export default DuoToneEffect;
