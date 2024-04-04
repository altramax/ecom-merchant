import DashboardStyle from "./DashboardStyle";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
// import graph__image from "../../../assets/Images/graph image.png";
// import arrowright from "../../../assets/Icons/arrow-right.svg";
// import { useNavigate } from "react-router-dom";
// import welcome_image from "../../../assets/Icons/welcome.png";
import Chart from "../../Molecule/Chart/Chart";
import InformationBox from "../../Molecule/InformationBox/InformationBox";
import info_icon from "../../../assets/Icons/profile-icon.svg";
import Notification from "../Notification/Notification";
import TopSellingProducts from "../TopSellingProducts/TopSellingProducts";
import close from "../../../assets/Icons/cancle.svg";
import { useEffect } from "react";
import { getProducts } from "../../../Redux/AllProductsSlice";
import download from "../../../assets/Icons/download-icon.png";
import SalesReport from "../SalesReport/SalesReport";
// import { useState } from "react";

const Dashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  const color = useAppSelector((state) => state.color);
  const products = useAppSelector((state) => state.allProducts);
  const dispatch = useAppDispatch();

  // const navigate = useNavigate();
  // const profileInformationStatus = useAppSelector(
  //   (state) => state.stepForm.skipForNow
  // );

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const notificationData1 = {
    id: "1",
    title: "Notification Test",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa voluptates ullam praesentium facere repudiandae animi odit dolor est, sunt voluptate iusto! Quisquam consequuntur ducimus distinctio, minima aperiam dolorem sint atque a cum asperiores voluptas error sequi suscipit nulla, vel modi amet, quidem libero. Nobis nemo praesentium nihil voluptatibus eius.",
  };

  // const notificationData2 = {
  //   id: "2",
  //   title: "Notification Test 2",
  //   body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsa voluptates ullam praesentium facere repudiandae animi odit dolor est, sunt voluptate iusto! Quisquam consequuntur ducimus distinctio, minima aperiam dolorem sint atque a cum asperiores voluptas error sequi suscipit nulla, vel modi amet, quidem libero. Nobis nemo praesentium nihil voluptatibus eius.",
  // };

  // console.log(products.products);

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
                    icon={info_icon}
                    headText="Revenue"
                    text="$23,400"
                  />
                </div>
                <div className="box__sub__container">
                  <InformationBox
                    icon={info_icon}
                    headText="Orders"
                    text="$23,400"
                  />
                </div>
                <div className="box__sub__container">
                  <InformationBox
                    icon={info_icon}
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
              {products.products !== null &&
                products.products.map((item: any) => (
                  <SalesReport {...item} cancle={`${close}`} key={item.id} />
                ))}
            </div>
          </div>
          <div className="dashboard__container__columntwo">
            <div className="dashboard__notification__panel">
              <h3>Notifications</h3>
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
              <h3>Top Selling Products</h3>
              <div>
                {products.products !== null &&
                  products.products.map((item: any) => (
                    <TopSellingProducts
                      {...item}
                      cancle={`${close}`}
                      key={item.id}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardStyle>
  );
};

export default Dashboard;

//  <div className="dashboard__container">
//           <div className="dashboard__container__header">
//             <div className="dashboard__container__header__displayarea">
//               {profileInformationStatus === "completed" ? (
//                 <div className="welcome__container">
//                   <div>
//                     <h3 className="dashboard__storename">
//                       Hi {user.displayName},
//                     </h3>
//                     <h1>Welcome</h1>
//                   </div>

//                   <img src={welcome_image} alt="" />
//                 </div>
//               ) : (
//                 <div className="profile__information__reminder">
//                   <div className="displayarea__round__chart">
//                     <img src={graph__image} alt="graph" />
//                   </div>
//                   <div className="displayarea__textgroup">
//                     <h3>Complete Your Setup</h3>
//                     <p>
//                       Don't miss out on all the features, ensure your
//                       information is complete to unlock full access to all our
//                       services
//                     </p>
//                   </div>
//                   <div
//                     className="displayarea__navigation"
//                     onClick={() => navigate("/onboardingSteps")}
//                   >
//                     Complete Setup <img src={arrowright} alt="arrowright" />
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="dashboard__container__chartgroup">
//             <div className="chart__container">
//               <div className="chart__container__header">
//                 <h3>Audience Metrics</h3>
//                 <div>
//                   <span>Visited</span>
//                   <span>Ordered</span>
//                 </div>
//               </div>

//               <div className="chart__container__sub">
//                 <Chart />
//               </div>
//             </div>
//             <div className="sales__statistics">

//               <h3>Monthly Sales Statistics</h3>
//               <div className="sales__bar">
//                 <div className="sales__bar__sub"></div>
//               </div>
//               <div className="sales__status">
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>status</th>
//                       <th> value</th>
//                       <th>items</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="table__row">
//                       <td>Pending Products</td>
//                       <td>17,669</td>
//                       <td>4</td>
//                     </tr>
//                     <tr className="table__row">

//                       <td>17,669</td>
//                       <td>4</td>
//                     </tr>
//                     <tr className="table__row">
//                       <td>Cancelled Products</td>
//                       <td>17,669</td>
//                       <td>4</td>
//                     </tr>
//                   </tbody>
//                 </table>
//                 <h3>Total Revenue : #300,000</h3>
//               </div>

//             </div>
//           </div>
//           <div className="information__boxes">
//             <InformationBox
//               icon={info_icon}
//               headText="Earnings"
//               paragraph="10,200"
//               percentageMove="40%"
//             />
//           </div>

//         </div>
