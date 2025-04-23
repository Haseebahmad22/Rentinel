import { useState, useEffect } from "react";
import Sidebar from "../utility/adminSidebar";
import axios from "axios";
import { Pencil, Trash2, Eye, ChevronLeft } from "lucide-react";

const AdminMngProperties = () => {
    const [properties, setProperties] = useState([]);
    const [viewedProperty, setViewedProperty] = useState(null);

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

    const handleView = (property) => {
        setViewedProperty(property);
    };

    const handleBack = () => {
        setViewedProperty(null);
    };

    const PropertyBox = ({ label, value }) => (
        <div className="flex flex-col w-[230px]">
            <label className="text-[14px] font-semibold text-gray-600 mb-1">{label}</label>
            <div className="bg-[#E9E9E9] px-4 py-2 rounded w-full text-[15px] text-gray-800">
                {value || "—"}
            </div>
        </div>
    );

    return (
        <div className="flex font-[Lexend] relative">
            <Sidebar />
            <div className="w-[80vw] bg-[#E6E6E6] relative">
                {/* Header */}
                <div className="pl-[80px] pr-[50px] mt-[10px]">
                    <h1 className="text-[#081E4A] text-[54px] font-bold">Manage Properties</h1>
                    <p className="text-[15px] text-[#4D4D4D] font-light">View, edit, or delete properties.</p>
                </div>



                {/* Property Table Container */}
                <div className="mx-[80px] mt-8 bg-white rounded-lg shadow-md relative w-[1060px] h-[380px]">
                    {/* Overlay on Table Only */}
                    {viewedProperty && (
                        <div className="absolute top-0 bg-white bg-opacity-90 z-50 flex rounded-lg items-center justify-center px-6 w-[1060px]">
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
                                        <PropertyBox label="PROPERTY ID" value={viewedProperty?.propertyID} />
                                        <PropertyBox label="PROPERTY NAME" value={viewedProperty?.propertyName} />
                                        <PropertyBox label="OWNER NAME" value={viewedProperty?.ownerName} />
                                        <PropertyBox label="AREA" value={viewedProperty?.area} />
                                    </div>

                                    {/* Row 2 */}
                                    <div className="flex flex-wrap justify-between ">
                                        <PropertyBox label="LOCATION" value={viewedProperty?.location} />
                                        <PropertyBox label="NO OF ROOMS" value={viewedProperty?.numOfRooms} />
                                        <PropertyBox label="NO OF BED ROOMS" value={viewedProperty?.numOfBedRooms} />
                                        <PropertyBox label="NO OF BATHS" value={viewedProperty?.numOfBaths} />
                                    </div>

                                    {/* Divider */}
                                    <hr className="border-gray-300" />

                                    {/* Row 3 */}
                                    <div className="flex flex-wrap justify-between ">
                                        <PropertyBox label="RENT START DATE" value={viewedProperty?.rentStartDate} />
                                        <PropertyBox label="RENT END DATE" value={viewedProperty?.rentEndDate} />
                                        <PropertyBox label="FIXED RENT AMOUNT" value={viewedProperty?.fixedRent} />
                                        <PropertyBox label="ASSIGNED TENANT" value={viewedProperty?.tenantName} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {/* Sticky Header */}
                    <div className="grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700 sticky top-0 z-10 rounded-t-lg h-[56px]">
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
                    <div className={`overflow-y-auto max-h-[324px] ${viewedProperty ? ' pointer-events-none' : ''}`}>
                        {properties.map((property) => (
                            <div key={property.propertyID} className="grid grid-cols-12 p-4 border-b border-gray-200 items-center">
                                <div className="col-span-2 font-medium">{property.propertyID}</div>
                                <div className="col-span-3">{property.propertyName}</div>
                                <div className="col-span-4 text-gray-600">{property.location}</div>
                                <div className="col-span-3 flex justify-end gap-[10px] pr-[14px]">
                                    <button
                                        className="text-white flex items-center justify-center gap-2 bg-[#1245A8] py-1 px-4 rounded w-[112px] cursor-pointer"
                                        onClick={() => handleView(property)}
                                    >
                                        <Eye className="w-4 h-4" />
                                        <span>View</span>
                                    </button>
                                    <button className="text-white flex items-center justify-center gap-2 bg-[#1976D2] py-1 px-4 rounded w-[112px] cursor-pointer">
                                        <Pencil className="w-4 h-4" />
                                        <span>Edit</span>
                                    </button>
                                    <button
                                        className="text-white flex items-center justify-center gap-2 bg-[#C42211] py-1 px-4 rounded w-[112px] cursor-pointer"
                                        onClick={() => handleDelete(property.id)}
                                    >
                                        <Trash2 className="w-4 h-4" />
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
