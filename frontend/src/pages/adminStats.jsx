import { useEffect, useState } from "react";
import Sidebar from "../utility/adminSidebar";
import Histogram from "../utility/Histogram";
import axios from "axios";


const AdminStats = () => {
    const [tenantCount, setTenantCount] = useState(0);
    const [ownerCount, setOwnerCount] = useState(0);
    const [propertyCount, setPropertyCount] = useState(0);
    const [paymentCount, setPaymentCount] = useState(0);
    const [totalPaymentAmount, setTotalPaymetAmount] = useState(0);
    const [avgRent, setavgRent] = useState(0);
    const [occupancyRate, setOccupancyRate] = useState(0);
    const [yearlyRent, setYearlyRent] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8080/payments/count")
            .then(res => setPaymentCount(res.data))
            .catch(err => console.error(err));

        axios.get("http://localhost:8080/properties/count")
            .then(res => setPropertyCount(res.data))
            .catch(err => console.error(err));

        axios.get("http://localhost:8080/owners/count")
            .then(res => setOwnerCount(res.data))
            .catch(err => console.error(err));

        axios.get("http://localhost:8080/tenants/count")
            .then(res => setTenantCount(res.data))
            .catch(err => console.error(err));
        axios.get("http://localhost:8080/properties/averageRent")
            .then(res => setavgRent(res.data))
            .catch(err => console.error(err));
        axios.get("http://localhost:8080/payments/totalPaymentAmount")
            .then(res => setTotalPaymetAmount(res.data))
            .catch(err => console.error(err));
        axios.get("http://localhost:8080/properties/occupancyRate")
            .then(res => setOccupancyRate(res.data))
            .catch(err => console.error(err));
        axios.get("http://localhost:8080/payments/yearlyRent")
            .then(res => setYearlyRent(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="flex font-[Lexend]">
            <Sidebar />
            <div className=" w-[80vw] bg-[#E6E6E6]">
                {/* top bar showing dashboard and profile */}
                <div className="flex w-[100%] content-center justify-between pl-[80px] pr-[50px] mt-[10px]">
                    <h1 className="text-[#081E4A] text-[54px] font-bold">Statistics</h1>

                </div>


                {/* Top 4 boxes */}
                <div className="flex w-[100%] justify-between h-fit gap-[10px] pl-[80px] pr-[50px] mt-[10px]">
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div className="w-full">
                            <h1 className="text-[#343434] text-[20px]">Total Properties</h1>
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-[#232323] text-[24px] font-bold">{propertyCount ? propertyCount.toLocaleString() : "0"}                                    </h1>
                                    <p className="text-[#949494] text-[12px]">Properties</p>
                                </div>
                                <img width={40} src="icons/Home-Icon.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] rounded-[15px] w-[33vw]">
                        <div className="w-full">
                            <h1 className="text-[#343434] text-[20px]">Total Tenants</h1>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h1 className="text-[#232323] text-[24px] font-bold">{tenantCount ? tenantCount.toLocaleString() : "0"}</h1>
                                    <p className="text-[#949494] text-[12px]">Tenants</p>
                                </div>
                                <img width={40} src="icons/User.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div className="w-full">
                            <h1 className="text-[#343434] text-[20px]">Total Owners</h1>
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-[#232323] text-[24px] font-bold">{ownerCount ? ownerCount.toLocaleString() : "0"}</h1>
                                    <p className="text-[#949494] text-[12px]">Owners</p>
                                </div>
                                <img width={40} src="icons/User.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div className="w-full">
                            <h1 className="text-[#343434] text-[20px]  mb-[5px]">Occupancy Rate</h1>
                            <div className="flex justify-between  mb-[5px]">
                                <div>
                                    <h1 className="text-[#232323] text-[24px] font-bold">{occupancyRate}%</h1>
                                    <p className="text-[#949494] text-[12px]">Properties</p>
                                </div>
                                <img width={40} src="icons/heartrate.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Last 4 boxes */}
                <div className="flex w-[100%] justify-between h-fit gap-[10px] pl-[80px] pr-[50px] mt-[20px]">
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div className="w-full">
                            <h1 className="text-[#343434] text-[20px]  mb-[5px]">Total Payments Made</h1>
                            <div className="flex justify-between  mb-[5px]">
                                <div>
                                    <h1 className="text-[#232323] text-[24px] font-bold">{paymentCount ? paymentCount.toLocaleString() : "0"}</h1>
                                    <p className="text-[#949494] text-[12px]">Payments</p>
                                </div>
                                <img width={40} src="icons/heartrate.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div className="w-full">
                            <h1 className="text-[#343434] text-[20px]">Yearly Rent</h1>
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-[#232323] text-[24px] font-bold">{yearlyRent ? yearlyRent.toLocaleString() : "0"}</h1>
                                    <p className="text-[#949494] text-[12px]">PKR</p>
                                </div>
                                <img width={40} src="icons/Money-Bag.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div className="w-full">
                            <h1 className="text-[#343434] text-[20px]">Average Rent Amount</h1>
                            <div className="flex justify-between">
                                <div>
                                    <h1 className="text-[#232323] text-[24px] font-bold">{avgRent ? avgRent.toLocaleString() : "0"}</h1>
                                    <p className="text-[#949494] text-[12px]">PKR</p>
                                </div>
                                <img width={40} src="icons/Money-Bag.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="flex bg-white px-[20px] py-[20px] gap-[30px] rounded-[15px] w-[33vw]">
                        <div className="w-full">
                            <h1 className="text-[#343434] text-[20px]  mb-[5px]">Total Payments</h1>
                            <div className="flex justify-between  mb-[5px]">
                                <div>
                                    <h1 className="text-[#232323] text-[24px] font-bold">{totalPaymentAmount ? totalPaymentAmount.toLocaleString() : "0"}</h1>
                                    <p className="text-[#949494] text-[12px]">PKR</p>
                                </div>
                                <img width={40} src="icons/Money-Bag.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex">

                    {/* Histogram */}
                    <div className="mt-[30px] w-[58.3vw] pl-[80px] h-[30vh]">
                        <Histogram />
                    </div>
                    {/* <div className="mt-[30px] w-[28.3vw] pl-[80px]">
                        <PropertyAreas />
                    </div> */}
                </div>
            </div>


        </div>
    );
};

export default AdminStats;
