import styled from "styled-components"
import { DarkModeColor, LightModeColor } from "../../Atom/Colors/Colors";


const NetworkErrorStyle = styled.div`

.online{
    position: absolute;
    top: 0;
    right: 0; 
    margin: 24px 24px 0 0;
    padding : 10px 20px;
    border: 1px solid;
    animation: dropdown 0.5s ease;
    transform-origin: right center;
}

.offline{
    position: absolute;
    top: 0;
    right: 0;
    margin: 24px 24px 0 0;
    padding : 10px 20px;
    border: 1px solid;
    animation: dropdown 0.5s ease;
    transform-origin: right center;
}

@keyframes dropdown{
    0%{
        transform: scaleX(0)
    }
    80%{
        transform: scaleX(1.2)
    }
    100%{
        transform: scaleX(1)
    }
}

#light {
    .online{
        color: ${LightModeColor.secondary};
        border-color:${LightModeColor.primary};
    }
    .offline{
        color: ${LightModeColor.error};
        border-color:${LightModeColor.error};
    }
}

#dark {
    .online{
        color: ${DarkModeColor.background};
        border-color: ${DarkModeColor.primary};
    }
    .offline{
        color: ${DarkModeColor.error};
        border-color: ${DarkModeColor.error}; 
    }
    
}


`;

export default NetworkErrorStyle;

// #light {
  
// }

// #dark {

// }