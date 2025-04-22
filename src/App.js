import React, { useState } from 'react';
import './App.css';
import CalculatorForm from './components/CalculatorForm';
import MonthlyBreakdown from './components/MonthlyBreakdown';
import Summary from './components/Summary';

function App() {
  const [calculationResult, setCalculationResult] = useState(null);

  const calculateResults = (amount, term, rate, taxes, insurance) => {
    const loanAmount = parseFloat(amount);
    const years = parseInt(term);
    const interestRate = parseFloat(rate) / 100 / 12;
    const numPayments = years * 12;

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(numPayments)) return null;

    const monthlyPrincipalAndInterest =
      (loanAmount * interestRate) /
      (1 - Math.pow(1 + interestRate, -numPayments));

    const monthlyTaxes = parseFloat(taxes) || 0;
    const monthlyInsurance = parseFloat(insurance) || 0;

    const monthlyPayment =
      monthlyPrincipalAndInterest + monthlyTaxes + monthlyInsurance;

    const totalPaid = monthlyPayment * numPayments;
    const totalInterest = (monthlyPrincipalAndInterest * numPayments) - loanAmount;

    return {
      loanAmount,
      monthlyPrincipal: loanAmount / numPayments,
      monthlyInterest: monthlyPrincipalAndInterest - (loanAmount / numPayments),
      monthlyTaxes,
      monthlyInsurance,
      totalPaid,
      totalInterest
    };
  };

  const handleCalculate = ({ amount, term, rate, taxes, insurance }) => {
    const result = calculateResults(amount, term, rate, taxes, insurance);
    setCalculationResult(result);
  };

  return (
    <div className="app-container">
      <h1>Mortgage Calculator</h1>
      <CalculatorForm onCalculate={handleCalculate} />
      {calculationResult && (
        <>
          <MonthlyBreakdown data={calculationResult} />
          <Summary result={calculationResult} />
        </>
      )}
    </div>
  );
}

export default App;
