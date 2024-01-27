import styled from "styled-components";

const DashboardStyle = styled.div`
 .theme__button{
    margin: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    box-shadow: inset 0 0 0 0 #e70680;
    transition: 1.2s ease-in-out;
    .moon{
        background-color: red;
        // border-top-left-radius: 50%;
        // border-bottom-left-radius: 50%;
        
    }
    .sun{
        background-color: #e70680;
        // border-top-right-radius: 50%;
        // border-bottom-right-radius: 50%;
    }
    // .roller{
    //     width: 30px;
    //     height: 30px;
    //     // background-color: green; 
    //     left: 30px;
    //     position: absolute;
    // }

    .img__container{
        width: 30px;
        padding: 5px;

        img{
            display: block;
            width: 17px;
            margin: auto;
        }
       
    }
 }

 .light{
    // background-color: blue;
    box-shadow: inset 60px 0 0 0 #e70680;
    // box-shadow: inset 60px 0 0 0 #e70680;

 }

 .dark{
    background-color: red;
    // box-shadow: inset 60px 0 0 0 #808080;
    // transition: background-color 1.2s linear 1.2s;
 }


`;

export default DashboardStyle;