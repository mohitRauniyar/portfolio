import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Updated data for digital literacy highlighting rural vs. urban contrast
const data = [
  {
    ability: "Operate a Computer",
    "Rural Male": 12.6,
    "Rural Female": 7.0,
    "Urban Male": 37.5,
    "Urban Female": 26.9,
  },
  {
    ability: "Use Internet",
    "Rural Male": 17.1,
    "Rural Female": 8.5,
    "Urban Male": 43.5,
    "Urban Female": 30.1,
  },
];

const DigitalDivideChart = () => {
  return (
    <div style={{ width: "100%", height: 500, margin: "20px auto" }}>
      <h3 style={{ textAlign: "center", marginBottom: 20 }}>
        Digital Literacy Divide: Rural vs Urban
      </h3>
      <p style={{ textAlign: "center", color: "#555" }}>
        Percentage of people able to operate a computer and use the internet
      </p>
      <ResponsiveContainer width="95%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ability" />
          <YAxis
            label={{
              value: "Percentage (%)",
              angle: -90,
              position: "insideLeft",
            }}
            domain={[0, 100]}
          />
          <Tooltip />
          <Legend />
          {/* Bar for Rural Male - Green */}
          <Bar
            dataKey="Rural Male"
            fill="#E57373"
            name="Rural Male"
            barSize={40}
          />
          {/* Bar for Rural Female - Green */}
          <Bar
            dataKey="Rural Female"
            fill="#EF5350" 
            name="Rural Female"
            barSize={40}
          />
          {/* Bar for Urban Male - Red */}
          <Bar
            dataKey="Urban Male"
            fill="#4CAF50"
            name="Urban Male"
            barSize={40}
          />
          {/* Bar for Urban Female - Red */}
          <Bar
            dataKey="Urban Female"
            fill="#81C784"
            name="Urban Female"
            barSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
      <p
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: "12px",
          color: "#777",
        }}
      >
        Source: Government Digital Literacy Survey
      </p>
    </div>
  );
};

export default DigitalDivideChart;
