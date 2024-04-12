import styled from "styled-components";
import { DarkModeColor } from "../../Atom/Colors/Colors";

const DashboardStyle = styled.div`
  // width: 100%;
  // transition: width 0.5s ease-in-out;



  #dark{
    .dashboard__container{
      background-color: #060606;
    }
    .dashboard__chartgroup{
      background-color: ${DarkModeColor.background}
    }
    .dashboard__salesreport, .dashboard__notification__panel,
    .dashboard__topproducts__panel { 
      background-color: ${DarkModeColor.background}; 
      ;
    }
    
    .dashboard__header{
      .box__container{
        background-color: ${DarkModeColor.background}
      }
      h3, p{
        color: ${DarkModeColor.secondary}
      }
    }
    .dashboard__notification__panel, .dashboard__topproducts__panel {
   h3{
    color: ${DarkModeColor.secondary};
    background-color: ${DarkModeColor.background}
   }
    }
    .dashboard__salesreport {
      .salesreport__header{
        background-color: ${DarkModeColor.background}; 
      }
      color:  ${DarkModeColor.secondary};
      input{
        background-color:  #0D0E0E;
      }
    }
  }

  .dashboard__container ::-webkit-scrollbar {
    display: none;
  }

  .dashboard__container {
    padding: 40px 20px 20px 20px;
    .dashboard__header {
      .dashboard__header__boxes {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
      }
    }
  }

    .dashbord__container__columnone {
      .dashboard__chartgroup {
        margin: 25px 0;
        padding: 10px;
        border: 1px solid;
        border-radius: 10px;
      }
    

    .dashboard__salesreport {
      height: 400px;
      overflow: auto;
      border-radius: 10px;
      // border: 1px solid;
      margin: 25px 0;
    
      .salesreport__header {
        position: sticky;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
         margin: 0 0 20px 0;
         padding: 20px 10px 10px 10px;
        
        .report__header__group {
          width: 100%;
          text-align: start;
          p {
            font-size: 10px;
          }
          h3 {
            top: 0;
            margin-bottom: 5px;
          }
        }

        .download__group {
          border: 1px solid;
          padding: 3px 7px;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
          font-size: 14px;
          img {
            width: 20px;
          }
        }
        input {
          outline: none;
          border: none;
          border-radius: 5px;
          width: 90%;
          margin: 10px;
          padding: 5px;
        }
      }
      .salesreport__list{
        padding: 0 10px;
      }
    }
  }

  .dashboard__container__columntwo {
    .dashboard__notification__panel::-webkit-scrollbar {
      display: none;
    }
    .dashboard__topproducts__panel::-webkit-scrollbar {
      display: none;
    }
    .dashboard__notification__panel,
    .dashboard__topproducts__panel {
      min-height: 300px;
      max-height: 367px;
      overflow: auto;
      border-radius: 10px;
      padding: 0 20px 10px 20px;
      border: 1px solid;
      margin: 25px 0;
      h3 {
        text-align: center;
        position: sticky;
        top: 0;
        padding: 10px 0;
      }
    }
    .notification__entry {
      margin: 5px 0;
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
      padding: 40px 25px 20px 25px;
      display: grid;
      gap: 25px;
      grid-template-columns: 70% 28%;
    }
.dashbord__container__columnone{



      .dashboard__salesreport{
        
        .salesreport__header {
          padding: 20px;
          
          
          .report__header__group {
            width: fit-content;
          }
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          input{
            width: 50%;
          }
        }
      }
    }
  }
  }
`;

export default DashboardStyle;
