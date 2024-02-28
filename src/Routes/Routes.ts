import Dashboard from "../Components/Organisms/Dashboard/Dashboard";
import WearHouse from "../Components/Template/WearHouseTemplate/WearHouse";
import UserProfile from "../Components/Template/UserProfileTemplate/UserProfileTemplate";

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
 
];

export default PrivateRoutes;
