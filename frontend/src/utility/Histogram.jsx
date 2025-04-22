import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";

const dataFromDB = [
  { month: "Jan", rent: 52 },
  { month: "Feb", rent: 63 },
  { month: "Mar", rent: 70 },
  { month: "Apr", rent: 57 },
  { month: "May", rent: 44 },
  { month: "Jun", rent: 56 },
  { month: "Jul", rent: 61 },
  { month: "Aug", rent: 77 },
  { month: "Sep", rent: 66 },
  { month: "Oct", rent: 58 },
  { month: "Nov", rent: 50 },
  { month: "Dec", rent: 72 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-indigo-600 text-white text-sm px-2 py-1 rounded shadow">
        {payload[0].value}
      </div>
    );
  }
  return null;
};

export default function Histogram() {
  const [selectedMonth, setSelectedMonth] = useState("Aug");
  const [open, setOpen] = useState(false);

  return (
    
    <div className="bg-white p-5 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-[10px]">
        <h2 className="text-3xl font-bold text-gray-900">Monthly Rents</h2>
        <div className="relative inline-block text-left">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex justify-center items-center px-4 py-3 text-sm font-medium  bg-[#F6F6F6] text-[#1A2B88] rounded-[12px] shadow-sm cursor-pointer hover:bg-[#e0e0e0] focus:outline-none"
          >
            {selectedMonth}
            <ChevronDown className="ml-2 h-4 w-4" />
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
              <div className="py-1 text-sm max-h-[230px] overflow-y-scroll">
                {dataFromDB.map((entry) => (
                  <div
                    key={entry.month}
                    onClick={() => {
                      setSelectedMonth(entry.month);
                      setOpen(false);
                    }}
                    className={`px-4 py-2  cursor-pointer hover:bg-gray-100 ${
                      selectedMonth === entry.month ? "bg-indigo-100 font-semibold" : ""
                    }`}
                  >
                    {entry.month}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dataFromDB}
            barSize={55}
            margin={{ top: 30, right: 20, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 16, fill: "#1f2937" }}
            />
            <YAxis
              tickFormatter={(value) => `${value}k`}
              tick={{ fontSize: 16, fill: "#1f2937" }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="rent"
              radius={[8, 8, 8, 8]}
              fill="#5932EA"
              label={({ x, y, width, value, index }) =>
                dataFromDB[index].month === selectedMonth ? (
                    <>
                    {/* Background Rect for Label */}
                    <rect
                      x={x + width / 4}
                      y={y - 30}
                      width={width / 2}
                      height={22}
                      fill="#1A2B88"  // Background color for the label
                      rx={4} // Rounded corners
                    />
                    {/* Label Text */}
                    <text
                      x={x + width / 2}
                      y={y - 15 + 1.5}
                      fill="#FFFFFF"
                      textAnchor="middle"
                      fontSize="16px"
                      fontWeight="bold"
                      
                    >
                      {value}
                    </text>
                  </>
                ) : null
              }
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}