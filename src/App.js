import React, { useState } from "react";
import InvestmentForm from "./components/InvestmentForm/InvestmentForm";
import InvestmentResult from "./components/InvestmentResults/InvestmentResults";
import Header from "./components/Header/Header";

function App() {
  const [userInput, setUserInput] = useState(null); // per-year results

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    setUserInput(userInput);
    // do something with yearlyData ...
  };

  function resetHandler() {
    setUserInput(null);
  }
  let yearlyData = [];
  if (userInput) {
    let currentSavings = +userInput["currentSavings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput["yearlySavings"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput["expectedInterest"] / 100;
    const duration = +userInput["investmentDuration"];

    // The below code calculates yearly results (total savings, interest etc)
    let previousInterest = 0;
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      previousInterest += yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        totalInterest: previousInterest,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  return (
    <div>
      <Header></Header>

      <InvestmentForm
        resetResults={resetHandler}
        calculateResults={calculateHandler}
      ></InvestmentForm>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      <InvestmentResult
        yearlyData={yearlyData}
        initialInvestment={userInput && +userInput["currentSavings"]}
      ></InvestmentResult>
    </div>
  );
}

export default App;
