import styled from "styled-components";
import { LightModeColor, DarkModeColor} from "../../Molecule/Colors/Colors"
// import { lightmode } from "../../../Redux/ColorSlice";

const NavbarTemplateStyle = styled.div`
#light{
 
        background-color: ${LightModeColor.lightblue}
    

}
#dark{
    background-color: ${DarkModeColor.shallow}
}

.navbar__container{
   width: 100%;  
//    height: 100vh;
   ul{
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    li{
        padding: 20px;
    }
    li:hover{
     background-color: red;
    }
   }
}


`;

export default NavbarTemplateStyle;