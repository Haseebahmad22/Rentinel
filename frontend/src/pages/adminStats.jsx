import { useState } from "react";
import Sidebar from "../utility/adminSidebar";
import Histogram from "../utility/Histogram";
import PropertyAreas from "../utility/PropertyAreas";


const AdminStats = () => {
    return (
        <div className="flex font-[Lexend]">
            <Sidebar />
            <div className=" w-[80vw] bg-[#E6E6E6]">
                {/* top bar showing dashboard and profile */}
                <div className="flex w-[100%] content-center justify-between pl-[80px] pr-[50px] mt-[10px]">
                    <h1 className="text-[#081E4A] text-[54px] font-bold">Statistics</h1>

                </div>


                {/* mid 4 boxes */}
                <div className="flex w-[100%] justify-between h-fit gap-[10px] pl-[80px] pr-[50px] mt-[30px]">
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div>
                            <h1 className="text-[#343434] text-[20px]">Total Payments</h1>
                            <h1 className="text-[#232323] text-[24px] font-bold">0</h1>
                            <p className="text-[#949494] text-[12px]">PKR</p>
                        </div>
                        <img src="icons/User.svg" alt="" />
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div>
                            <h1 className="text-[#343434] text-[20px]">Total Payments</h1>
                            <h1 className="text-[#232323] text-[24px] font-bold">0</h1>
                            <p className="text-[#949494] text-[12px]">PKR</p>
                        </div>
                        <img src="icons/User.svg" alt="" />
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div>
                            <h1 className="text-[#343434] text-[20px]">Total Properties</h1>
                            <h1 className="text-[#232323] text-[24px] font-bold">0</h1>
                            <p className="text-[#949494] text-[12px]">Properties</p>
                        </div>
                        <img src="icons/Home-Icon.svg" alt="" />
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div>
                            <h1 className="text-[#343434] text-[20px]">Total Payments</h1>
                            <h1 className="text-[#232323] text-[24px] font-bold">0</h1>
                            <p className="text-[#949494] text-[12px]">PKR</p>
                        </div>
                        <img src="icons/heartrate.svg" alt="" />
                    </div>
                </div>


                {/* last 4 boxes */}
                <div className="flex w-[100%] justify-between h-fit gap-[10px] pl-[80px] pr-[50px] mt-[30px]">
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div>
                            <h1 className="text-[#343434] text-[20px]">Total Payments</h1>
                            <h1 className="text-[#232323] text-[24px] font-bold">0</h1>
                            <p className="text-[#949494] text-[12px]">PKR</p>
                        </div>
                        <img src="icons/heartrate.svg" alt="" />
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div>
                            <h1 className="text-[#343434] text-[20px]">Total Tenants</h1>
                            <h1 className="text-[#232323] text-[24px] font-bold">0</h1>
                            <p className="text-[#949494] text-[12px]">Tenants</p>
                        </div>
                        <img src="icons/Money-Bag.svg" alt="" />
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div>
                            <h1 className="text-[#343434] text-[20px]">Total Properties</h1>
                            <h1 className="text-[#232323] text-[24px] font-bold">0</h1>
                            <p className="text-[#949494] text-[12px]">Properties</p>
                        </div>
                        <img src="icons/Money-Bag.svg" alt="" />
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div>
                            <h1 className="text-[#343434] text-[20px]">Total Payments</h1>
                            <h1 className="text-[#232323] text-[24px] font-bold">0</h1>
                            <p className="text-[#949494] text-[12px]">PKR</p>
                        </div>
                        <img src="icons/Money-Bag.svg" alt="" />
                    </div>
                </div>
                <div className="flex">

                {/* Histogram */}
                <div className="mt-[30px] w-[58.3vw] pl-[80px]">
                    <Histogram />
                </div>
                <div className="mt-[30px] w-[28.3vw] pl-[80px]">
                    <PropertyAreas />
                </div>
                </div>
            </div>


        </div>
    );
};

export default AdminStats;
