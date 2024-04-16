import styled from "styled-components";
import { LightModeColor, DarkModeColor } from "../../Atom/Colors/Colors";

const OnboardingStepsStyle = styled.div`
#light{
    background-color: ${LightModeColor.backgroundVariant};
}

#dark{
    background-color: ${DarkModeColor.backgroundVariant};
}
.onboarding__steps__container{
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
}
`;

export default OnboardingStepsStyle;
