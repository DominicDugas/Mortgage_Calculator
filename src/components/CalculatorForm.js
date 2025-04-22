import React, { useState } from 'react';

function CalculatorForm({ onCalculate }) {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(6.681);
  const [loanTerm, setLoanTerm] = useState(30);
  const [taxes, setTaxes] = useState(300); // default monthly property tax
  const [insurance, setInsurance] = useState(150); // default monthly insurance

  const handleSubmit = (e) => {
    e.preventDefault();

    const loanAmount = homePrice * (1 - downPayment / 100);

    onCalculate({
      amount: loanAmount,
      term: loanTerm,
      rate: interestRate,
      taxes,
      insurance
    });
  };

  return (
    <form onSubmit={handleSubmit} className="calculator-form">
      <label>Home Price ($):</label>
      <input
        type="number"
        value={homePrice}
        onChange={(e) => setHomePrice(Number(e.target.value))}
      />
      <label>Down Payment (%):</label>
      <input
        type="number"
        value={downPayment}
        onChange={(e) => setDownPayment(Number(e.target.value))}
      />
      <label>Interest Rate (%):</label>
      <input
        type="number"
        step="0.01"
        value={interestRate}
        onChange={(e) => setInterestRate(Number(e.target.value))}
      />
      <label>Loan Term (years):</label>
      <input
        type="number"
        value={loanTerm}
        onChange={(e) => setLoanTerm(Number(e.target.value))}
      />
      <label>Monthly Taxes ($):</label>
      <input
        type="number"
        value={taxes}
        onChange={(e) => setTaxes(Number(e.target.value))}
      />
      <label>Monthly Insurance ($):</label>
      <input
        type="number"
        value={insurance}
        onChange={(e) => setInsurance(Number(e.target.value))}
      />
      <button type="submit">Calculate</button>
    </form>
  );
}

export default CalculatorForm;
