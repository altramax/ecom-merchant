import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const AlertCardStyle = styled.div`
 .alertcard__container{
  border: 1px solid;
 }

 #light{
    .alertcard__container{
        width: 20%;
        border-color: ${LightModeColor.secondary}
    };

 }

 #dark{
    .alertcard__container{
        border-color: ${DarkModeColor.background}
    }
 }
`;

export default AlertCardStyle;