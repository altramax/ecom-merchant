import Dashboard from "../Components/Organisms/Dashboard/Dashboard";
import WearHouse from "../Components/Template/WearHouseTemplate/WearHouseTemplate";
import UserProfile from "../Components/Template/UserProfileTemplate/UserProfileTemplate";
import ProductDetailsTemplate from "../Components/Template/ProductDetailsTemplate/ProductDetailsTemplate";

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
        path: "/wearhouse/details",
        component: ProductDetailsTemplate,
      },
    ],
  },
];

export default PrivateRoutes;
