import styled from "styled-components";
import { LightModeColor, DarkModeColor} from "../../Molecule/Colors/Colors"
import { lightmode } from "../../../Redux/ColorSlice";

const NavbarTemplateStyle = styled.div`
#light{
 
        background-color: ${LightModeColor.grey}
    

}
#dark{

}

.navbar__container{
   width: 100%;  
   ul{
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    li{
        padding: 20px;
    }
   }
}


`;

export default NavbarTemplateStyle;