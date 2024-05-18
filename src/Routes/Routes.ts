import Dashboard from "../Components/Organisms/Dashboard/Dashboard";
import WearHouse from "../Components/Template/WearHouseTemplate/WearHouseTemplate";
import UserProfile from "../Components/Template/UserProfileTemplate/UserProfileTemplate";
import ProductDetailsTemplate from "../Components/Template/ProductDetailsTemplate/ProductDetailsTemplate";
import OrdersTemplate from "../Components/Template/OrderTemplate/OrdersTemplate";
import AddProductModal from "../Components/Organisms/AddProductModal/AddProductModal";

const PrivateRoutes = [
  {
    element: [
      {
        path: "/dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    element: [
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
   {
    element: [
      {
        path: "/orders",
        component: OrdersTemplate,
      },
    ],
  },
  {
    element: [
      {
        path: "/wearhouse/addproducts",
        component: AddProductModal,
      },
    ],
  },
];

export default PrivateRoutes;
