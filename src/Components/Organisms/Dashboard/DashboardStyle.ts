import styled from "styled-components";
// import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const DashboardStyle = styled.div`
  // width: 100%;
  // transition: width 0.5s ease-in-out;
  .dashboard__container {
    padding: 40px 20px 20px 20px;
    .dashboard__header {
      .dashboard__header__boxes {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
      }
    }

    .dashboard__chartgroup {
      margin-top: 20px;
      padding: 10px;
      border: 1px solid;
    }

    .dashboard__container__columntwo {
      .dashboard__notification__panel,
      .dashboard__topproducts__panel {
        border: 1px solid;
        h3 {
          text-align: center;
        }
      }
    }
  }

  @media (min-width: 768px) {
    .box__sub__container {
      width: 30%;
    }
    .dashboard__chartgroup {
    }
  }

  @media (min-width: 1080px) {
    .dashboard__container {
      display: grid;
      gap: 20px;
      grid-template-columns: 70% 28%;

      .dashboard__header {
      }
    }
  }
`;

export default DashboardStyle;

// .dashboard__container {
//   padding: 35px;

//   .dashboard__container__header {
//     margin-top: 15px;
//     .welcome__container {
//       width: 100%;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       img {
//         width: 100px;
//         // height: 300px;
//       }
//     }
//     .dashboard__container__header__displayarea {
//       border: 1px solid;
//       border-radius: 8px;
//       height: 300px;
//       padding: 20px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//     }
//     .profile__information__reminder {
//       display: flex;
//       flex-direction: column;
//       justify-content: space-between;
//       align-items: center;
//     }
//     .displayarea__round__chart {
//       margin-bottom: 20px;
//     }
//     .displayarea__textgroup {
//       text-align: center;

//       h3 {
//         margin-bottom: 12px;
//       }

//       p {
//       }
//     }
//     .displayarea__navigation {
//       cursor: pointer;
//       margin-top: 20px;
//       display: flex;
//       justify-content: start;
//       align-items: start;
//       gap: 5px;
//       height: 100%;
//       img {
//         display: block;
//         width: 20px;
//       }
//     }
//   }
//   .dashboard__container__chartgroup {
//     margin-top: 30px;
//     .chart__container__sub {
//       // border: 1px solid;
//     }
//     .sales__statistics {
//       border: 1px solid;
//       border-radius: 10px;
//       width: 100%;
//       margin-top: 50px;
//       padding: 20px;
//       // display: flex;
//       // justify-content: center;
//       // align-items: center;
//       // .sales__statistics__sub {
//       // }
//     }
//     h3 {
//       text-align: center;
//     }
//     .sales__bar {
//       border: 1px solid;
//       border-radius: 30px;
//       height: 10px;
//       margin-top: 20px;
//       .sales__bar__sub {
//         background-color: ${LightModeColor.primaryVariant};
//         height: 100%;
//         width: 60%;
//         border-top-right-radius: 10px;
//         border-bottom-right-radius: 10px;
//       }
//     }
//     .sales__status {
//       font-size: 14px;

//       table {
//         width: 100%;
//         th {
//           border-collapse: no-collapse;
//           text-align: start;
//           margin-bottom: 10px;
//         }
//         th,
//         td {
//           padding: 10px 5px;
//         }
//         .table__row {
//           margin: 20px;
//         }
//         tbody {
//           padding-top: 20px;
//         }
//       }
//     }
//   }
// }

// #light {
//   .dashboard__container {
//     .dashboard__container__header {
//       .dashboard__storename,
//       .displayarea__navigation {
//         color: ${LightModeColor.primaryVariant};
//       }
//       .dashboard__container__header__displayarea {
//         //   border-color: ${LightModeColor.primaryVariant};
//         border: none;
//         background-color: ${LightModeColor.primary};
//       }
//       .displayarea__navigation {
//       }
//     }
//   }
// }
// #dark {
//   .dashboard__container {
//     .dashboard__container__header {
//       .dashboard__storename,
//       .displayarea__navigation {
//         color: ${DarkModeColor.primaryVariant};
//       }
//       .dashboard__container__header__displayarea {
//         border-color: ${DarkModeColor.primary};
//       }
//       .displayarea__navigation {
//       }
//     }
//   }
// }

// @media (min-width: 768px) {
//   .dashboard__container {
//     .dashboard__container__header {
//       .dashboard__container__header__displayarea {
//         // padding: 20px 40px;
//         .welcome__container {
//           width: 80%;
//           justify-content: space-between;
//           h3 {
//             font-size: 25px;
//           }
//           h1 {
//             font-size: 60px;
//           }
//         }
//         height: 130px;
//       }
//       .profile__information__reminder {
//         padding: 20px;

//         flex-direction: row;
//       }
//       .displayarea__textgroup {
//         width: 50%;
//         h3 {
//           margin-top: -20px;
//         }
//       }
//       .displayarea__navigation {
//         margin-top: 0;
//       }
//     }
//   }
// }

// @media (min-width: 1080px) {
//   .dashboard__container {
//     .dashboard__container__header {
//       .dashboard__container__header__displayarea {
//         .welcome__container {
//           h3 {
//             font-size: 30px;
//           }
//           h1 {
//             font-size: 80px;
//           }
//         }
//         height: 150px;
//       }
//     }

//     .dashboard__container__chartgroup {
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       .chart__container {
//         width: 70%;
//         height: 380px;
//         background-color: #808080;
//         border-radius: 10px;
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         padding: 10px 20px;
//         .chart__container__header {
//           display: flex;
//           justify-content: space-between;
//           align-items:npm  center;
//           width: 100%;
//           span {
//             margin-left: 30px;
//           }
//         }
//       }
//       .chart__container__sub {
//         background-color: #000;
//         width: fit-content;
//         padding: 20px;
//         border-radius: 10px;
//         // border: 1px solid;
//         margin-bottom: 50px;
//         margin: auto;
//       }
//       .sales__statistics {
//         margin-top: 0;
//         border: 1px solid;
//         width: 27%;
//         height: 380px;

//         h3 {
//           margin-bottom: 40px 0;
//         }
//         table {
//           margin: 20px 0;
//         }
//       }
//     }
//   }
// }

// @media (min-width: 1227px) {
//   .dashboard__container {
//     .dashboard__container__chartgroup {
//       .sales__statistics {
//         padding-top: 30px;
//       }
//     }
//   }
// }
