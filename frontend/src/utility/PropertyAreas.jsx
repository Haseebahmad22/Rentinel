// PropertyAreas.jsx
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const PropertyAreas = () => {
  // Dummy data - replace with API call later
  const data = [
    { name: '2Kanal', value: 54 },
    { name: '1Kanal', value: 46 }
  ];

  const COLORS = ['#0088FE', '#00C49F'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Property Areas</h2>
      
      {/* Circular progress chart */}
      <div className="relative h-48 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[{ name: 'Total', value: 100 }]}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={70}
              fill="#E5E7EB"
              dataKey="value"
            />
            <Pie
              data={[{ name: 'Total', value: 84 }]}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={70}
              fill="#3B82F6"
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              <Cell key="cell-1" fill="#3B82F6" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-gray-800">84%</span>
        </div>
      </div>
      
      {/* Property type breakdown */}
      <div className="space-y-3">
        {data.map((entry, index) => (
          <div key={`item-${index}`} className="flex items-center justify-between">
            <div className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></div>
              <span className="text-gray-700">{entry.name}</span>
            </div>
            <span className="font-medium text-gray-800">{entry.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyAreas;