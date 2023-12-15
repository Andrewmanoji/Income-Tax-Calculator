import React, { useState } from "react";
import "./style.css";

const IncomeTaxCalculator = () => {
  const [annualIncome, setAnnualIncome] = useState("");
  const [taxAmount, setTaxAmount] = useState(0);

  const calculateTax = () => {
    // Simplified tax slabs and rates
    const income = annualIncome;

    if (income <= 250000) {
      setTaxAmount(0);
    } else if (income <= 500000) {
      setTaxAmount(income * 0.05);
    } else if (income <= 1000000) {
      setTaxAmount(income * 0.2);
    } else {
      setTaxAmount(income * 0.3);
    }
  };

  const Reset = (e) => {
    setAnnualIncome("");
    setTaxAmount(0);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "35px",
          fontWeight: "300",
          marginTop: "60px",
          letterSpacing: "2px",
          marginBottom: "-5px",

          color: "white",
        }}
      >
        Income Tax Calculator !
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div>
            <label>Annual Income (₹) :</label> <br />
            <input
              type="number"
              value={annualIncome}
              onChange={(e) => setAnnualIncome(e.target.value)}
            />
          </div>

          <div className="btn">
            <button onClick={calculateTax}>Calculate</button>
            <button className="reset" onClick={Reset}>
              Reset
            </button>
          </div>

          <div className="output"> Tax Amount: ₹ {taxAmount.toFixed(2)}</div>
        </div>
      </form>
    </div>
  );
};

export default IncomeTaxCalculator;
