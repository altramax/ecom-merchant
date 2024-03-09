import styled from "styled-components";
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";

const LoadingModalStyle = styled.div`
z-index: 500;

 
#dark{
    display: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${DarkModeColor.background}
 .loading{

 }
}

#light{
    display: fixed;
    width: 100vw;
    height: 100vh;
    background-color: ${LightModeColor.primary}
 .loading{
    
 }
}

`;

export default LoadingModalStyle;