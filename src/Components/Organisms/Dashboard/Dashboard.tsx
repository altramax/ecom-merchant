import DashboardStyle from "./DashboardStyle";
import AlertCard from "../../Molecule/AlertCard/AlertCard";

const Dashboard = () => {
   
  return (
    <DashboardStyle>
      <AlertCard/>
      <div className='dashboard__container'>
        <div className='dashboard__container__header'>
          <h1>Dashboard</h1>
        </div>
      </div>
    </DashboardStyle>
  );
};

export default Dashboard;
