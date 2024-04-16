import DashboardStyle from "./DashboardStyle";
import { useAppSelector, useAppDispatch} from "../../../Redux/Hooks";

import Chart from "../../Molecule/Chart/Chart";
import InformationBox from "../../Molecule/InformationBox/InformationBox";
import Notification from "../Notification/Notification";
import TopSellingProducts from "../TopSellingProducts/TopSellingProducts";

import download from "../../../assets/Icons/download-icon.png";
import SalesReport from "../SalesReport/SalesReport";
import revenue from "../../../assets/Icons/revenue icon.png";
import orders from "../../../assets/Icons/orders.png";
import customer from "../../../assets/Icons/customer.png";
import { useEffect } from "react";
import { getProducts } from "../../../Redux/AllProductsSlice";
import EmptyState from "../../Molecule/EmptyState/EmptyState";

const Dashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const color = useAppSelector((state) => state.color);
  const products = useAppSelector((state) => state.allProducts.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const notificationData1 = {
    id: "1",
    title: "Notification Test",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa voluptates ullam praesentium facere repudiandae animi odit dolor est, sunt voluptate iusto! Quisquam consequuntur ducimus distinctio, minima aperiam dolorem sint atque a cum asperiores voluptas error sequi suscipit nulla, vel modi amet, quidem libero. Nobis nemo praesentium nihil voluptatibus eius.",
  };

  return (
    <DashboardStyle>
      <div id={color.mode}>
        <div className="dashboard__container">
          <div className="dashbord__container__columnone">
            <div className="dashboard__header">
              <h3>Hi, {user.displayName}</h3>
              <div className="dashboard__header__boxes">
                <div className="box__sub__container">
                  <InformationBox
                    icon={revenue}
                    headText="Revenue"
                    text="$23,400"
                  />
                </div>
                <div className="box__sub__container">
                  <InformationBox
                    icon={orders}
                    headText="Orders"
                    text="$23,400"
                  />
                </div>
                <div className="box__sub__container">
                  <InformationBox
                    icon={customer}
                    headText="Customer"
                    text="$23,400"
                  />
                </div>
              </div>
            </div>
            <div className="dashboard__chartgroup">
              <Chart />
            </div>
            <div className="dashboard__salesreport">
              <div className="salesreport__header">
                <div className="report__header__group">
                  <h3>Sales Report</h3>
                  <p>300 Items in record</p>
                </div>
                <input type="text" className="sales__searchbar" />
                <div className="download__group">
                  <img src={download} alt="" className="download" />
                  <span>Export as CSV</span>
                </div>
              </div>
              <div className="salesreport__list">
                <SalesReport />
              </div>
            </div>
          </div>
          <div className="dashboard__container__columntwo">
            <div className="dashboard__notification__panel">
              <div className="dashboard__notification__panel__header">
                <h3>Notifications</h3>
              </div>
              <div className="notification__entry">
                <Notification {...notificationData1} />
              </div>
              <div className="notification__entry">
                <Notification {...notificationData1} />
              </div>
              <div className="notification__entry">
                <Notification {...notificationData1} />
              </div>
              <div className="notification__entry">
                <Notification {...notificationData1} />
              </div>
              <div className="notification__entry">
                <Notification {...notificationData1} />
              </div>
              <div className="notification__entry">
                <Notification {...notificationData1} />
              </div>
            </div>
            <div className="dashboard__topproducts__panel">
              <div className="dashboard__topproducts__panel__header">
                <h3>Top Selling Products</h3>
              </div>
              <div>
                {products !== null ? (
                  products.map((item: any) => (
                    <TopSellingProducts
                      {...item}
                      cancle={`${close}`}
                      key={item.id}
                    />
                  ))
                ) : (
                  <EmptyState
                    header="No Products Found"
                    text="Products will appear here after successful Purchase"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardStyle>
  );
};

export default Dashboard;
