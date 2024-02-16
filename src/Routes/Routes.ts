import Dashboard from "../Components/Molecule/Dashboard/Dashboard";
import WearHouse from "../Components/Template/WearHouseTemplate/WearHouse";
import UserProfile from "../Components/Template/UserProfileTemplate/UserProfileTemplate";
import OnboardingSteps from "../Components/Organisms/OnboardingSteps/OnboardingSteps";
import VerifyEmailModal from "../Components/Organisms/VerifyEmailModal/VerifyEmailModal";

const PrivateRoutes = [
  {
    elements: [
      {
        path: "/dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    elements: [
      {
        path: "/wearhouse",
        component: WearHouse,
      },
    ],
  },
  {
    element: [
      {
        path: "/userprofile",
        component: UserProfile,
      },
    ],
  },
  {
    element: [
      {
        path: "/onboardingsteps",
        component: OnboardingSteps,
      },
    ],
  },
 
];

export default PrivateRoutes;
