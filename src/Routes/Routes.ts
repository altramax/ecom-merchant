import Dashboard from "../Components/Molecule/Dashboard/Dashboard";
import WearHouse from "../Components/Template/WearHouseTemplate/WearHouse";

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
];

export default PrivateRoutes;
