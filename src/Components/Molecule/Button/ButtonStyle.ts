import styled from "styled-components";

const ButtonStyle = styled.div`

.loading__icon {
    animation: swing 1s infinite;
  }

  @keyframes swing {
    0%{
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`;

export default ButtonStyle;