import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const DashboardStyle = styled.div`
  .dashboard__container {
    padding: 35px;

    .dashboard__container__header {
      .dashboard__storename {
        margin-bottom: 20px;
      }
      .dashboard__container__header__displayarea {
        border: 1px dotted;
        border-radius: 8px;
      }
      .profile__information__reminder{
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      
      }
      .displayarea__round__chart {
        margin-bottom: 20px;
      }
      .displayarea__textgroup {
        text-align: center;

        h3 {
          margin-bottom: 12px;
        }

        p {
        }
      }
      .displayarea__navigation {
        cursor: pointer;
        margin-top: 20px;
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 5px;
        height: 100%;
        img {
          display: block;
          width: 20px;
        }
      }
    }
  }

  #light {
    .dashboard__container {
      .dashboard__container__header {
        .dashboard__storename, .displayarea__navigation{
        color: ${LightModeColor.primaryVariant}
        }
        .dashboard__container__header__displayarea {
            border-color: ${LightModeColor.primary}
        }
        .displayarea__navigation{

        }
      }
    }
  }
  #dark {
    .dashboard__container {
        .dashboard__container__header {
          .dashboard__storename, .displayarea__navigation{
          color: ${DarkModeColor.primaryVariant}
          }
          .dashboard__container__header__displayarea {
              border-color: ${DarkModeColor.primary}
          }
          .displayarea__navigation{
  
          }
        }
      }
  }

  @media (min-width: 768px) {
    .dashboard__container {
      .dashboard__container__header {
        .dashboard__container__header__displayarea {}
        .profile__information__reminder{
          padding: 20px;

          flex-direction: row;
        }
        .displayarea__textgroup {
          width: 50%;
          h3 {
            margin-top: -20px;
          }
        }
        .displayarea__navigation {
          margin-top: 0;
        }
      }
    }
  }
`;

export default DashboardStyle;
