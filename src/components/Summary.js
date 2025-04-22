// src/components/Summary.js
import React from 'react';
import './Summary.css';

const Summary = ({ result }) => {
  if (!result) return null;

  const {
    totalPaid,
    totalInterest,
    loanAmount
  } = result;

  // Ensure all numbers are valid before formatting
  const formatCurrency = (value) =>
    typeof value === 'number' && !isNaN(value)
      ? `$${value.toFixed(2)}`
      : '$0.00';

  return (
    <div className="result-section">
      <h2>Loan Summary</h2>
      <p><strong>Loan Amount:</strong> {formatCurrency(loanAmount)}</p>
      <p><strong>Total Paid Over Term:</strong> {formatCurrency(totalPaid)}</p>
      <p><strong>Total Interest Paid:</strong> {formatCurrency(totalInterest)}</p>
    </div>
  );
};

export default Summary;
