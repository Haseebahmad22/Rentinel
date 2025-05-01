import React, { useEffect, useState } from 'react';
import tenantDashboardService from '../services/tenantdashboardservice';
import { FaHome, FaCalendar, FaDollarSign, FaUserAlt } from 'react-icons/fa';
import Histogram from "../utility/Histogram";
import Sidebar from '../components/Tenantsidebar';
//import Sidebar from "../utility/tenantSidebar";
import { useNavigate } from 'react-router-dom';

const TenantDashboard = () => {
  const userName = 'rachelbrown'; // Hardcoded username

  const navigate = useNavigate();

  const [totalOwners, setTotalOwners] = useState(0);
  const [totalRentedProperties, setTotalRentedProperties] = useState(0);
  const [totalRentPaid, setTotalRentPaid] = useState(0);
  const [upcomingDueDate, setUpcomingDueDate] = useState('N/A');
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const owners = await tenantDashboardService.getTotalOwners(userName);
        const rentedProperties = await tenantDashboardService.getRentedProperties(userName);
        const rentPaid = await tenantDashboardService.getTotalRentPaid(userName);
        const dueDate = await tenantDashboardService.getUpcomingDueDate(userName);

        setTotalOwners(owners);
        setTotalRentedProperties(rentedProperties);
        setTotalRentPaid(rentPaid);
        setUpcomingDueDate(dueDate);
      } catch (error) {
        console.error('Error fetching tenant data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userName]);

  return (
    <div className="flex font-[Lexend]">
      <Sidebar />
      <div className="w-[80vw] bg-[#F9F9F9] min-h-screen">
        {/* Top Bar */}
        <div className="flex justify-between items-center px-[80px] mt-[10px]">
          <h1 className="text-[#081E4A] text-[54px] font-bold">Dashboard</h1>
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              className="rounded-full"
              width={50}
              src="https://lh3.googleusercontent.com/a/ACg8ocJhIQkzBe0Q1lgF3dFOUXbOOylZzEBgRm2dujZb4OGx=s96-c"
              alt="Profile"
            />
            <div>
              <h3 className="text-[18px] text-[#292D32] font-medium">{userName}</h3>
              <p className="text-[12px] text-[#292D32]">Tenant</p>
            </div>
          </div>
        </div>

        {/* Top Cards (Welcome, Manage Properties, Manage Notifications) */}
        <div className="grid grid-cols-3 gap-[30px] px-[80px] mt-[30px]">
          {/* Welcome Back Card */}
          <div className="flex flex-col justify-center bg-white px-[20px] py-[30px] gap-[10px] rounded-[15px] shadow-lg">
            <h2 className="text-[20px] font-semibold text-[#081E4A]">
              Welcome Back {userName}!
            </h2>
            <p className="text-[14px] text-[#949494]">It's good to see you again</p>
          </div>

          {/* Manage Properties */}
          <div className="flex flex-col justify-between bg-gradient-to-r from-[#4B2EF7] to-[#6C5DD3] px-[20px] py-[30px] rounded-[15px] shadow-lg cursor-pointer text-white relative">
            <div>
              <h2 className="text-[20px] font-semibold">Manage Properties</h2>
              <p className="text-[14px]">View and pay for rented properties</p>
            </div>
            <button
              onClick={() => navigate('/tenantmanageproperties')}
              className="absolute bottom-4 right-4 bg-white text-[#4B2EF7] text-[12px] font-semibold py-1 px-4 rounded-[8px]"
            >
              View
            </button>
          </div>

          {/* Manage Notifications */}
          <div className="flex flex-col justify-between bg-gradient-to-r from-[#4B2EF7] to-[#6C5DD3] px-[20px] py-[30px] rounded-[15px] shadow-lg cursor-pointer text-white relative">
            <div>
              <h2 className="text-[20px] font-semibold">Manage Notifications</h2>
              <p className="text-[14px]">View notifications received</p>
            </div>
            <button
              onClick={() => navigate('/tenantnotifications')}
              className="absolute bottom-4 right-4 bg-white text-[#4B2EF7] text-[12px] font-semibold py-1 px-4 rounded-[8px]"
            >
              View
            </button>
          </div>
        </div>

        {/* Dashboard Info Cards */}
        <div className="grid grid-cols-4 gap-[30px] px-[80px] mt-[30px]">
          {/* Total Owners */}
          <div className="flex flex-col items-center bg-white px-[20px] py-[30px] gap-[10px] rounded-[15px] shadow-lg">
            <FaUserAlt className="w-10 h-10 text-[#3C21F7]" />
            <h2 className="text-[#081E4A] text-[18px] font-semibold mt-2">Total Owners</h2>
            <h1 className="text-[#343434] text-[24px] font-bold">
              {loading ? 'Loading...' : totalOwners}
            </h1>
            <p className="text-[#949494] text-[12px]">Owners</p>
          </div>

          {/* Rented Properties */}
          <div className="flex flex-col items-center bg-white px-[20px] py-[30px] gap-[10px] rounded-[15px] shadow-lg">
            <FaHome className="w-10 h-10 text-[#3C21F7]" />
            <h2 className="text-[#081E4A] text-[18px] font-semibold mt-2">Rented Properties</h2>
            <h1 className="text-[#343434] text-[24px] font-bold">
              {loading ? 'Loading...' : totalRentedProperties}
            </h1>
            <p className="text-[#949494] text-[12px]">Properties</p>
          </div>

          {/* Total Rent Paid */}
          <div className="flex flex-col items-center bg-white px-[20px] py-[30px] gap-[10px] rounded-[15px] shadow-lg">
            <FaDollarSign className="w-10 h-10 text-[#3C21F7]" />
            <h2 className="text-[#081E4A] text-[18px] font-semibold mt-2">Total Rent Paid</h2>
            <h1 className="text-[#343434] text-[24px] font-bold">
              {loading ? 'Loading...' : totalRentPaid}
            </h1>
            <p className="text-[#949494] text-[12px]">PKR</p>
          </div>

          {/* Upcoming Due Date */}
          <div className="flex flex-col items-center bg-white px-[20px] py-[30px] gap-[10px] rounded-[15px] shadow-lg">
            <FaCalendar className="w-10 h-10 text-[#3C21F7]" />
            <h2 className="text-[#081E4A] text-[18px] font-semibold mt-2">Upcoming Due Date</h2>
            <h1 className="text-[#343434] text-[24px] font-bold">
              {loading ? 'Loading...' : upcomingDueDate}
            </h1>
            <p className="text-[#949494] text-[12px]">Date</p>
          </div>
        </div>

        {/* Monthly Payments Histogram */}
        <div className="mt-[30px] w-[80vw] px-[80px]">
          <Histogram />
        </div>
      </div>
    </div>
  );
};

export default TenantDashboard;
