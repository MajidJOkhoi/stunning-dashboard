import Sidebar from './Sidebar';
import Header from './Header';
import SalesGrowthChart from './SalesGrowthChart';
import RecentActivities from './RecentActivities';
import BestPerformance from './BestPerformance';
import NewProperties from './NewProperties';
import DashHead from './DashHead';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header/>
        <div>
          <DashHead />
        </div>
        <div className="p-1 grid grid-cols-1 md:grid-cols-6 gap-4 ">
          <div className="md:col-span-4">
            <SalesGrowthChart />
          </div>
          <div className="md:col-span-2">
            <BestPerformance />
          </div>
          <div className="md:col-span-4 p-2">
            <RecentActivities />
          </div>
          <div className="md:col-span-2">
            <NewProperties />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
