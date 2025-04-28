import { useState } from "react";
import { Eye, EyeClosed, ChevronDown } from "lucide-react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Signup() {
    const [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        email: "",
        password: "",
        cnic: "",
        role: "Tenant",
    });
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    const [dropdownOpen, setDropdownOpen] = useState(false);  // Manage dropdown visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Get current date for account creation
        const accountCreationDate = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

        // Construct the user data
        const newUser = {
            fullName: formData.fullName,
            userName: formData.userName,
            email: formData.email,
            password: formData.password,  // Note capital P to match backend
            cnic: formData.cnic,          // Match case with backend
            accountCreationDate: accountCreationDate,
        };

        console.log(newUser)
        try {
            // Choose API endpoint based on the role
            const apiUrl =
                formData.role === "Owner"
                    ? "http://localhost:8080/owners"
                    : "http://localhost:8080/tenants";

            // Send the request to the backend using axios
            const response = await axios.post(apiUrl, newUser);
            console.log("User registered successfully:", response.data);

            // You can perform additional actions like redirecting or showing success message
        } catch (error) {
            console.error("Error during registration:", error.response ? error.response.data : error.message);
        }
    };
    

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Toggle password visibility
    };
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);  // Toggle dropdown visibility
    };
    const getGreeting = () => {
        const hours = new Date().getHours();
        if (hours < 12) {
            return "Good Morning!";
        } else if (hours < 18) {
            return "Good Afternoon!";
        } else {
            return "Good Evening!";
        }
    };
    return (
        <div className="w-[100vw] h-screen flex overflow-hidden">
            <div className="w-[50vw] h-full bg-[#111822] flex flex-col justify-center items-center p-8">
                <div className="w-full max-w-md">
                    <div className="flex space-x-6 mb-10">
                        <Link to ="/signin" className="text-white text-xl border-b-2 border-transparent hover:border-orange-400 cursor-pointer">Login</Link>
                        <span className="text-white text-xl border-b-2 border-orange-400">Registration</span>
                    </div>

                    <h1 className="text-3xl text-white mb-2">{getGreeting()}</h1>
                    <p className="text-gray-400 mb-8">Thank you for Joining us!</p>

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                        {[
                            { label: "Full Name", name: "fullName", type: "text" },
                            { label: "User Name", name: "userName", type: "text" },
                            { label: "Your Email", name: "email", type: "email" },
                            {
                                label: "password",
                                name: "password",
                                type: showPassword ? "text" : "password", // Toggle password visibility
                            }, { label: "CNIC", name: "cnic", type: "text" }
                        ].map((field) => (
                            <div key={field.name} className="bg-gray-700 w-full h-fit relative">
                                <p className="bg-[#111822] text-sm text-gray-400 px-1">{field.label}</p>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    placeholder={field.label} // Use field.label here for dynamic placeholder
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    className="bg-gray-700 placeholder:text-gray-500 text-white rounded p-3 w-full focus:outline-none pr-10" // added padding for button
                                    required
                                />
                                {field.name === "password" && (
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-1  -translate-x-1/2 top-1/2 text-gray-400 text-sm"
                                    >
                                        {showPassword ? <EyeClosed /> : <Eye />}
                                    </button>
                                )}
                            </div>
                        ))}


                        {/* Role Dropdown */}
                        <div className="relative">
                            <p className="bg-[#111822] text-sm text-gray-400 px-1">Role</p>

                            {/* Custom Select Dropdown */}
                            <div
                                className="bg-gray-700 text-white rounded p-3 w-full relative cursor-pointer"
                                onClick={toggleDropdown}  // Toggle dropdown visibility
                            >
                                <p>{formData.role}</p>
                                {/* Custom Down Arrow */}
                                <button
                                    type="button"
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg cursor-pointer"
                                >
                                    <ChevronDown />
                                </button>
                            </div>

                            {/* Dropdown options */}
                            {dropdownOpen && (
                                <div className="absolute left-0 right-0 bg-gray-700 text-white rounded-b p-0 overflow-y-scroll">
                                    <div
                                        onClick={() => setFormData({ ...formData, role: "Tenant" })}
                                        className="p-2 cursor-pointer hover:bg-gray-600"
                                    >
                                        Tenant
                                    </div>
                                    <div
                                        onClick={() => setFormData({ ...formData, role: "Owner" })}
                                        className="p-2 cursor-pointer hover:bg-gray-600"
                                    >
                                        Owner
                                    </div>
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded mt-6"
                        >
                            Register
                        </button>
                    </form>

                </div>
            </div>

            <div className="w-[50vw] h-screen relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-black/70 to-transparent"></div>

                <img
                    src="/Images/house.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-8 right-8 text-white text-3xl font-bold">
                    <img src="/logo.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
