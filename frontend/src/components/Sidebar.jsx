import { Link, useLocation } from "react-router-dom";
import { User, Building, Users, FileText, BarChart2, LogOut, LayoutDashboard } from "lucide-react";
import Logo from "../logo.svg";
import Dashboard from "../pages/Dashboard";

const Sidebar = () => {
    const location = useLocation();

    const linkClass = (path) =>
        `flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 transition ${location.pathname === path ? "bg-blue-600 text-white" : "text-gray-300"
        }`;

    return (
        <div className="h-screen w-60 bg-black text-white flex flex-col justify-between py-6">
            {/* Logo Section */}
            <div className="flex items-center justify-center px-6 mt-[10px]">
                <img src={Logo} alt="Rentinel Logo" className="w-[180px]" />
            </div>

            {/* Navigation */}
            <nav className="flex flex-col px-4">
                <div className="mt-4">
                    <Link to="/dashboard" className={linkClass("/dashboard")}>
                        <LayoutDashboard className="w-5 h-5 mr-2" /> Dashboard
                    </Link>
                    <Link to="/account" className={linkClass("/account")}>
                        <User className="w-5 h-5 mr-2" /> Account Details
                    </Link>
                </div>

                <div className="mt-4">
                    {/* Divider above Management */}
                    <div className="border-t border-gray-700 my-4" />
                    <div className="text-gray-400 text-sm px-4">Management</div>
                    <Link to="/properties" className={linkClass("/properties")}>
                        <Building className="w-5 h-5 mr-2" /> Properties
                    </Link>
                    <Link to="/owners" className={linkClass("/owners")}>
                        <Users className="w-5 h-5 mr-2" /> Owners
                    </Link>
                    <Link to="/tenants" className={linkClass("/tenants")}>
                        <Users className="w-5 h-5 mr-2" /> Tenants
                    </Link>
                </div>

                <div className="mt-4">
                    <div className="border-t border-gray-700 my-4" />
                    <div className="text-gray-400 text-sm px-4">Report</div>
                    <Link to="/payments" className={linkClass("/payments")}>
                        <FileText className="w-5 h-5 mr-2" /> Payment History
                    </Link>
                    <Link to="/statistics" className={linkClass("/statistics")}>
                        <BarChart2 className="w-5 h-5 mr-2" /> Statistics
                    </Link>
                </div>
            </nav>

            {/* Logout Button */}
            <div className="px-4 w-full flex items-center justify-center">
                <button className="w-[60%] flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
                    <LogOut className="w-5 h-5" /> Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
