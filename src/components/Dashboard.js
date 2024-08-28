import React from 'react';
import Sidebar from './Sidebar';
import SalesOrdersChart from './SalesOrdersChart';
import SalesPortionPieChart from './SalesPortionPieChart';

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <div className="flex-1 p-4 bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-2 shadow rounded " >
            <h3 className="text-xl font-semibold mb-4">Sales vs Orders</h3>
            <SalesOrdersChart  />
          </div>
          <div className="bg-white p-2 shadow rounded w-full " >
            <h3 className="text-xl font-semibold mb-4">Portion of Sales</h3>
            <SalesPortionPieChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
