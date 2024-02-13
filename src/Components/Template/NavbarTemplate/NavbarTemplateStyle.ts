import styled from "styled-components";
import { LightModeColor, DarkModeColor} from "../../Molecule/Colors/Colors"
// import { lightmode } from "../../../Redux/ColorSlice";

const NavbarTemplateStyle = styled.div`
// #light{
 
//         background-color: ${LightModeColor.lightblue}
    

// }
// #dark{
//     background-color: ${DarkModeColor.shallow}
// }

.network__response {
    animation: growDown 300ms ease-in-out forwards;
    transform-origin: top center;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 12px;
    padding: 5px 10px;
    background-color: green;
    color: #fff;
    margin: 24px 24px 0 0;
    z-index: 200;
    border-radius: 6px;
  }

.navbar__container{
   width: 100%;  

   ul{
    li{
        padding: 20px;
        cursor: pointer;  
    }
    li:hover{
     background-color: red;
    }
   }
}


`;

export default NavbarTemplateStyle;