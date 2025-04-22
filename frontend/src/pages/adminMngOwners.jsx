import { useState,useEffect } from "react";
import Sidebar from "../utility/adminSidebar";
import axios from "axios";
import { Pencil, Trash2, Eye } from "lucide-react";

const AdminMngOwners = () => {
    const [owners, setOwners] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/owners")
            .then(response => {
                setOwners(response.data);
            })
            .catch(error => {
                console.error("Error fetching owners:", error);
            });
    }, []);

    const handleDelete = (id) => {
        console.log("Delete property with id:", id);
    };

    return (
        <div className="flex font-[Lexend]">
            <Sidebar />
            <div className="w-[80vw] bg-[#E6E6E6]">
                <div className="pl-[80px] pr-[50px] mt-[10px]">
                    <h1 className="text-[#081E4A] text-[54px] font-bold">Manage Owners</h1>
                    <p className="text-[15px] text-[#4D4D4D] font-light">View, edit, or delete owners.</p>
                </div>

                {/* Payments Table Container */}
                <div className="mx-[80px] mt-8 bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Sticky Header */}
                    <div className="grid grid-cols-14 bg-gray-100 p-4 font-medium text-gray-700 sticky top-0 z-10">
                        <div className="col-span-2">OWNER ID</div>
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
                        {owners.map((owner,index) => (
                            <div key={owner.id} className="grid grid-cols-14 p-4 border-b border-gray-200 items-center">
                                <div className="col-span-2 font-medium">{owner.id}</div>
                                <div className="col-span-2">{owner.userName}</div>
                               
                                <div className="col-span-3">{owner.email}</div>
                                <div className="col-span-3">{owner.cnic}</div>
                               
                                <div className="col-span-4 flex justify-end gap-2 pr-4">
                                    <button className="text-white flex items-center justify-center gap-2 bg-[#1245A8] py-1 px-3 rounded w-[112px]">
                                        <Eye className="w-4 h-4"/>
                                        <span>View</span>
                                    </button>
                                    <button className="text-white flex items-center justify-center gap-2 bg-[#1976D2] py-1 px-3 rounded w-[112px]">
                                        <Pencil className="w-4 h-4"/>
                                        <span>Edit</span>
                                    </button>
                                    <button 
                                        className="text-white flex items-center justify-center gap-2 bg-[#C42211] py-1 px-3 rounded w-[112px]"
                                        onClick={() => handleDelete(owner.id)}
                                    >
                                        <Trash2 className="w-4 h-4"/>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-[390px] flex flex-col items-center rounded-[16px] p-[10px] bg-white text-[#081E4A] font-medium ml-[80px] mt-[15px]">
                    <h1 className="text-[36px]">Total Owners</h1>
                    <h1 className="text-[32px]">{owners.length}</h1>
                </div>
            </div>
        </div>
    );
};
export default AdminMngOwners;
