import { useState, useEffect } from "react";
//import Sidebar from "../utility/tenantSidebar"; // Adjust path as necessary
import Histogram from "../utility/Histogram"; // Adjust path as necessary
import { FaHome, FaCalendar, FaCreditCard, FaDollarSign, FaUserAlt } from "react-icons/fa";
import tenantStatsService from '../services/tenantstatsservice';  // Adjust path as necessary
import Sidebar from "../components/Tenantsidebar";

const TenantStats = () => {
    const userName = 'rachelbrown';  // Replace with dynamic userName if necessary

    const [rentedProperties, setRentedProperties] = useState(0);
    const [lastPaymentDate, setLastPaymentDate] = useState('N/A');
    const [upcomingDueDate, setUpcomingDueDate] = useState('N/A');
    const [totalPaymentsMade, setTotalPaymentsMade] = useState(0);
    const [totalRentPaid, setTotalRentPaid] = useState(0);
    const [yearlyRentPaid, setYearlyRentPaid] = useState(0);
    const [averageRentPaid, setAverageRentPaid] = useState(0);
    const [totalOwners, setTotalOwners] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            setLoading(true);  // Start loading

            try {
                const rented = await tenantStatsService.getRentedProperties(userName);
                setRentedProperties(rented || 0);

                const lastDate = await tenantStatsService.getLastPaymentDate(userName);
                setLastPaymentDate(lastDate || 'N/A');

                const dueDate = await tenantStatsService.getUpcomingDueDate(userName);
                setUpcomingDueDate(dueDate || 'N/A');

                const totalPayments = await tenantStatsService.getTotalPaymentsMade(userName);
                setTotalPaymentsMade(totalPayments || 0);

                const totalRent = await tenantStatsService.getTotalRentPaid(userName);
                setTotalRentPaid(totalRent || 0);

                const yearlyRent = await tenantStatsService.getYearlyRentPaid(userName);
                setYearlyRentPaid(yearlyRent || 0);

                const avgRent = await tenantStatsService.getAverageRentPaid(userName);
                setAverageRentPaid(avgRent || 0);

                const owners = await tenantStatsService.getTotalOwners(userName);
                setTotalOwners(owners || 0);

            } catch (error) {
                console.error("Error fetching tenant stats:", error);
            } finally {
                setLoading(false);  // Stop loading
            }
        };

        fetchStats();
    }, [userName]);

    return (
        <div className="flex font-[Lexend]">
            <Sidebar />
            <div className="w-[80vw] bg-[#E6E6E6] min-h-screen">

                {/* Header */}
                <div className="flex justify-between items-center px-[80px] mt-[10px]">
                    <h1 className="text-[#081E4A] text-[54px] font-bold">Statistics</h1>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-4 gap-4 px-[80px] mt-[30px]">
                    <StatBox
                        icon={<FaHome className="w-6 h-6 text-[#3C21F7]" />}
                        title="Rented Properties"
                        value={rentedProperties}
                        subtitle="Properties"
                        loading={loading}
                    />
                    <StatBox
                        icon={<FaCalendar className="w-6 h-6 text-[#3C21F7]" />}
                        title="Last Payment Date"
                        value={lastPaymentDate}
                        subtitle="Date"
                        loading={loading}
                    />
                    <StatBox
                        icon={<FaCalendar className="w-6 h-6 text-[#3C21F7]" />}
                        title="Upcoming Due Date"
                        value={upcomingDueDate}
                        subtitle="Date"
                        loading={loading}
                    />
                    <StatBox
                        icon={<FaCreditCard className="w-6 h-6 text-[#3C21F7]" />}
                        title="Total Payments Made"
                        value={totalPaymentsMade}
                        subtitle="Payments"
                        loading={loading}
                    />
                    <StatBox
                        icon={<FaDollarSign className="w-6 h-6 text-[#3C21F7]" />}
                        title="Total Rent Paid"
                        value={totalRentPaid}
                        subtitle="PKR"
                        loading={loading}
                    />
                    <StatBox
                        icon={<FaDollarSign className="w-6 h-6 text-[#3C21F7]" />}
                        title="Yearly Rent Paid"
                        value={yearlyRentPaid}
                        subtitle="PKR"
                        loading={loading}
                    />
                    <StatBox
                        icon={<FaDollarSign className="w-6 h-6 text-[#3C21F7]" />}
                        title="Average Rent Paid"
                        value={averageRentPaid.toFixed(2)}
                        subtitle="PKR"
                        loading={loading}
                    />
                    <StatBox
                        icon={<FaUserAlt className="w-6 h-6 text-[#3C21F7]" />}
                        title="Total Owners"
                        value={totalOwners}
                        subtitle="Owners"
                        loading={loading}
                    />
                </div>

                {/* Histogram */}
                <div className="mt-[30px] px-[80px]">
                    <Histogram />
                </div>
            </div>
        </div>
    );
};

const StatBox = ({ icon, title, value, subtitle, loading }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center">
            <div>
                <h3 className="text-gray-500 text-sm">{title}</h3>
                <p className="text-2xl font-bold mt-2">
                    {loading ? 'Loading...' :
                        (typeof value === 'number' ? value.toLocaleString() : value)}
                </p>
                <span className="text-gray-400 text-xs">{subtitle}</span>
            </div>
            {icon}
        </div>
    </div>
);

export default TenantStats;
