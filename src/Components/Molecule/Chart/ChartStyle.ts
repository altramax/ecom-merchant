import styled from "styled-components";

const ChartStyle = styled.div`
  @media (min-width: 1080px) {
    .dashboard__chart {
      canvas {
        height: 240px !important;
        width: 480px !important;
      }
    }
  }
`;
export default ChartStyle;
