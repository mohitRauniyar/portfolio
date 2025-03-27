import React from "react";
import {
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from "recharts";

// Updated data for Internet penetration in India
const data = [
  { year: "2012", penetration: 13 },
  { year: "2013", penetration: 15 },
  { year: "2014", penetration: 18 },
  { year: "2015", penetration: 27 },
  { year: "2016", penetration: 35 },
  { year: "2017", penetration: 34 },
  { year: "2018", penetration: 38 },
  { year: "2019", penetration: 50 },
  { year: "2020", penetration: 45 },
  { year: "2021", penetration: 47 },
  { year: "2022", penetration: 49 },
  { year: "2023*", penetration: 49 },
];

const MobileDataChart = () => {
  return (
    <div style={{ width: "100%", height: 500, margin: "20px auto" }}>
      <h3 style={{ textAlign: "center", marginBottom: 20 }}>
        India’s Growing Internet Connectivity
      </h3>
      <p style={{ textAlign: "center", color: "#555" }}>
        Internet penetration rate in India (in percent)
      </p>
      <ResponsiveContainer width="95%" height={400}>
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            label={{
              value: "Penetration Rate (%)",
              angle: -90,
              position: "insideLeft",
            }}
            domain={[0, 60]}
          />
          <Tooltip />
          <Legend />
          {/* Bar for Internet Penetration */}
          <Bar
            dataKey="penetration"
            fill="#2C63CA"
            name="Internet Penetration (%)"
            barSize={40}
          />
          {/* Trend Line */}
          <Line
            type="monotone"
            dataKey="penetration"
            stroke="#E91E63"
            strokeWidth={2}
            dot={{ r: 4 }}
            name="Trend Line"
          />
        </ComposedChart>
      </ResponsiveContainer>
      <p
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: "12px",
          color: "#777",
        }}
      >
        * provisional <br />
        Sources: Hootsuite, We Are Social, Kepios via DataReportal
      </p>
    </div>
  );
};

export default MobileDataChart;
