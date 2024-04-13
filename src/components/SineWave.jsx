import styled, { keyframes } from "styled-components";

// Keyframes for wave animation
const waveAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const wave1Animation = keyframes`
  0% {
    transform: scaleY(1.2) translateX(0%);
  }
  100% {
    transform: scaleY(1.2) translateX(100%);
  }
`;

const wave2Animation = keyframes`
  0% {
    transform: scaleY(0.8) translateX(0%);
  }
  100% {
    transform: scaleY(0.8) translateX(100%);
  }
`;

// Styled component for the SVG
const SVGContainer = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: auto;

  .wave {
    animation: ${waveAnimation} 8s linear infinite;
  }

  .wave1 {
    animation: ${wave1Animation} 10s linear infinite;
  }

  .wave2 {
    animation: ${wave2Animation} 12s linear infinite;
  }
`;

const SineWaveSVG = () => {
  return (
    <SVGContainer viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <path
          id="sineWave"
          fill="#0099ff"
          fillOpacity="0.2"
          d="M0,160 C320,300,420,300,740,160 C1060,20,1120,20,1440,160 V0 H0"
        />
      </defs>
      {/* Render waves */}
      <use className="wave" href="#sineWave" />
      <use className="wave" x="-100%" href="#sineWave" />
      <use className="wave1" href="#sineWave" />
      <use className="wave1" x="-100%" href="#sineWave" />
      <use className="wave2" href="#sineWave" />
      <use className="wave2" x="-100%" href="#sineWave" />
    </SVGContainer>
  );
};

export default SineWaveSVG;
