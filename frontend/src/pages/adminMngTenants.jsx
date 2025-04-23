import { useState, useEffect } from "react";
import Sidebar from "../utility/adminSidebar";
import axios from "axios";
import { Pencil, Trash2, Eye, ChevronLeft } from "lucide-react";

const AdminMngTenants = () => {
    const [tenants, setTenants] = useState([]);
    const [viewedTenant, setViewedTenant] = useState(null);


    useEffect(() => {
        axios.get("http://localhost:8080/tenants")
            .then(response => {
                setTenants(response.data);
            })
            .catch(error => {
                console.error("Error fetching tenants:", error);
            });
    }, []);

    const handleDelete = (id) => {
        console.log("Delete property with id:", id);
    };

    const handleView = (tenant) => {
        setViewedTenant(tenant);
    };

    const handleBack = () => {
        setViewedTenant(null);
    };

    const TenantBox = ({ label, value }) => (
        <div className="flex flex-col w-[170px]">
            <label className="text-[14px] font-semibold text-gray-600 mb-1">{label}</label>
            <div className="bg-[#E9E9E9] px-4 py-2 rounded w-full text-[15px] text-gray-800">
                {value || "—"}
            </div>
        </div>
    );

    return (
        <div className="flex font-[Lexend]">
            <Sidebar />
            <div className="w-[80vw] bg-[#E6E6E6]">
                <div className="pl-[80px] pr-[50px] mt-[10px]">
                    <h1 className="text-[#081E4A] text-[54px] font-bold">Manage Tenants</h1>
                    <p className="text-[15px] text-[#4D4D4D] font-light">View, edit, or delete tenants.</p>
                </div>

                {/* Payments Table Container */}
                <div className="mx-[80px] mt-8 bg-white rounded-lg shadow-md overflow-hidden relative">
                    {/* overlay */}
                    {viewedTenant && (
                        <div className="absolute top-0 bg-white bg-opacity-90 z-50 flex rounded-lg items-center justify-center px-6 w-[1060px] h-[380px]">
                            <div className=" p-6 rounded-lg w-full max-w-[1000px] space-y-8 relative">
                                {/* Back Button */}
                                <div className="absolute top-4 left-4">
                                    <div
                                        onClick={handleBack}
                                        className="w-[43px] h-[43px] cursor-pointer rounded-full bg-[#D9D9D9] flex items-center justify-center"
                                    >
                                        <ChevronLeft className="text-black" />
                                    </div>
                                </div>

                                <div className="pt-12 flex flex-col space-y-8">
                                    {/* Row 1 */}
                                    <div className="flex flex-wrap justify-between ">
                                        <TenantBox label="Tenant ID" value={viewedTenant?.ID} />
                                        <TenantBox label="FULL NAME" value={viewedTenant?.fullName} />
                                        <TenantBox label="USERNAME" value={viewedTenant?.userName} />
                                        <TenantBox label="CNIC" value={viewedTenant?.cnic} />
                                        <TenantBox label="EMAIL" value={viewedTenant?.email} />
                                    </div>


                                    {/* Divider */}
                                    <hr className="border-gray-300" />
                                    <div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    )}


                    {/* Sticky Header */}
                    <div className="grid grid-cols-14 bg-gray-100 p-4 font-medium text-gray-700 sticky top-0 z-10">
                        <div className="col-span-2">TENANT ID</div>
                        <div className="col-span-2">USERNAME</div>
                        <div className="col-span-3">EMAIL</div>
                        <div className="col-span-3">CNIC</div>
                        <div className="col-span-4 flex justify-end gap-12 pr-12">
                            <span>VIEW</span>
                            <span>EDIT</span>
                            <span>DELETE</span>
                        </div>
                    </div>

                    {/* Scrollable Body */}
                    <div className="overflow-y-auto max-h-[322px]">
                        {tenants.map((tenant) => (
                            <div key={tenant.id} className="grid grid-cols-14 p-4 border-b border-gray-200 items-center">
                                <div className="col-span-2 font-medium">{tenant.id}</div>
                                <div className="col-span-2">{tenant.userName}</div>
                                <div className="col-span-3">{tenant.email}</div>
                                <div className="col-span-3">{tenant.cnic}</div>
                                <div className="col-span-4 flex justify-end gap-2 pr-4">
                                    <button className="text-white flex items-center justify-center gap-2 bg-[#1245A8] py-1 px-3 rounded cursor-pointer w-[112px]"
                                        onClick={() => handleView(tenant.id)}
                                    >
                                        <Eye className="w-4 h-4" />
                                        <span>View</span>
                                    </button>
                                    <button className="text-white flex items-center justify-center gap-2 bg-[#1976D2] py-1 px-3 rounded w-[112px] cursor-pointer">
                                        <Pencil className="w-4 h-4" />
                                        <span>Edit</span>
                                    </button>
                                    <button
                                        className="text-white flex items-center justify-center gap-2 bg-[#C42211] py-1 px-3 rounded w-[112px] cursor-pointer"
                                        onClick={() => handleDelete(tenant.id)}
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Total Tenants */}
                <div className="w-[390px] flex flex-col items-center rounded-[16px] p-[10px] bg-white text-[#081E4A] font-medium ml-[80px] mt-[15px]">
                    <h1 className="text-[36px]">Total Tenants</h1>
                    <h1 className="text-[32px]">{tenants.length}</h1>
                </div>
            </div>
        </div>
    );
};

export default AdminMngTenants;
