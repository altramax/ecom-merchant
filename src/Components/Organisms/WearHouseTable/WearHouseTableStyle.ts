import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const WearHouseStyles = styled.div`
  #dark {
    table {
      th {
        // background-color: ${DarkModeColor.background};
      }
      tbody {
        tr:hover {
          // background-color: ${DarkModeColor.backgroundVariant};
          // border-radius: 50%;
        }
      }
    }
  }

  #light {

      background-color: ${LightModeColor.background};
    

    table {
      border-radius: 30px;
      thead,
      th {
        background-color: ${LightModeColor.background};
        border-color: ${LightModeColor.primary};
      }
      tbody {
        tr:hover {
          background-color: ${LightModeColor.backgroundVariant};
          // border-radius: 50%;
        }
      }
    }
  }

  .WearHouseTable__bar__container {
   
    
  }

  table {
    width: 100%;
    border-spacing: 0px;
    padding-bottom: 30px;
    thead {
      position: sticky;
      top: 0;
    }
    th {
      margin-bottom: 10px;
      border-collapse: no-collapse;
      padding: 25px 10px;
      border-bottom: 1px solid;
    }
    td {
      font-size: 14px;
    }
    td {
      text-align: center;
      padding: 20px 10px;
    }
    tr {
      cursor: pointer;
      border: 1px solid;
    }
    tbody {
    }

    .pending {
      color: #000;
      font-weight: 500;
      padding: 5px 0;
      border-radius: 8px;
      background-color: #ffa500;
    }
  }
`;
export default WearHouseStyles;
