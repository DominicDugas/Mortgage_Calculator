// src/components/MonthlyBreakdown.js
import React from 'react';
import './MonthlyBreakdown.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const MonthlyBreakdown = ({ result }) => {
  if (!result) return null;

  const data = [
    { name: 'Principal & Interest', value: result.monthlyPrincipal + result.monthlyInterest },
    { name: 'Property Taxes', value: result.monthlyTaxes },
    { name: 'Insurance', value: result.monthlyInsurance }
  ];

  return (
    <div className="result-section">
      <h2>Monthly Breakdown</h2>
      <p><strong>Principal:</strong> ${result.monthlyPrincipal.toFixed(2)}</p>
      <p><strong>Interest:</strong> ${result.monthlyInterest.toFixed(2)}</p>
      <p><strong>Property Taxes:</strong> ${result.monthlyTaxes.toFixed(2)}</p>
      <p><strong>Insurance:</strong> ${result.monthlyInsurance.toFixed(2)}</p>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          dataKey="value"
          nameKey="name"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default MonthlyBreakdown;

