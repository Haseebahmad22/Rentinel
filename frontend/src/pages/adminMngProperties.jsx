import { useState, useEffect } from "react";
import Sidebar from "../utility/adminSidebar";
import axios from "axios";
import { Pencil, Trash2, Eye } from "lucide-react";

const AdminMngProperties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/properties")
            .then(response => {
                setProperties(response.data);
            })
            .catch(error => {
                console.error("Error fetching properties:", error);
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
                    <h1 className="text-[#081E4A] text-[54px] font-bold">Manage Properties</h1>
                    <p className="text-[15px] text-[#4D4D4D] font-light">View, edit, or delete properties.</p>
                </div>

                {/* Property Table Container */}
                <div className="mx-[80px] mt-8 bg-white rounded-lg shadow-md overflow-hidden">
                    {/* Sticky Header */}
                    <div className="grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700 sticky top-0 z-10">
                        <div className="col-span-2">PROPERTY ID</div>
                        <div className="col-span-3">PROPERTY NAME</div>
                        <div className="col-span-4">Location</div>
                        <div className="col-span-3 flex justify-end gap-[50px] pr-[50px]">
                            <span>VIEW</span>
                            <span>EDIT</span>
                            <span>DELETE</span>
                        </div>
                    </div>

                    {/* Scrollable Body */}
                    <div className="overflow-y-auto max-h-[323px]">
                        {properties.map((property) => (
                            <div key={property.propertyID} className="grid grid-cols-12 p-4 border-b border-gray-200 items-center">
                                <div className="col-span-2 font-medium">{property.propertyID}</div>
                                <div className="col-span-3">{property.propertyName}</div>
                                <div className="col-span-4 text-gray-600">{property.location}</div>
                                <div className="col-span-3 flex justify-end gap-[10px] pr-[14px]">
                                    <button className="text-white flex items-center justify-center gap-2 bg-[#1245A8] py-1 px-4 rounded w-[112px]">
                                        <Eye className="w-4 h-4"/>
                                        <span>View</span>
                                    </button>
                                    <button className="text-white flex items-center justify-center gap-2 bg-[#1976D2] py-1 px-4 rounded w-[112px]">
                                        <Pencil className="w-4 h-4"/>
                                        <span>Edit</span>
                                    </button>
                                    <button 
                                        className="text-white flex items-center justify-center gap-2 bg-[#C42211] py-1 px-4 rounded w-[112px]"
                                        onClick={() => handleDelete(property.id)}
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
                    <h1 className="text-[36px]">Total Properties</h1>
                    <h1 className="text-[32px]">{properties.length}</h1>
                </div>
            </div>
        </div>
    );
};

export default AdminMngProperties;