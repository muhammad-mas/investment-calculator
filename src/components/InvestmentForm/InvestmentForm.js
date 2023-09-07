import React, { useState } from "react";
import styles from "./InvestmentForm.module.css";

function InvestmentForm(props) {
  const initialState = {
    currentSavings: "1000",
    yearlySavings: "150",
    expectedInterest: "5",
    investmentDuration: "10",
  };
  const [investmentForm, setInvestmentForm] = useState(initialState);
  const formChangeHandler = (event) => {
    const { value, name } = event.target;
    setInvestmentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const resetHandler = (event) => {
    setInvestmentForm(initialState);
    props.resetResults();
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (investmentForm) props.calculateResults(investmentForm);
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            name="currentSavings"
            type="number"
            id="current-savings"
            onChange={formChangeHandler}
            value={investmentForm.currentSavings}
            required
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            name="yearlySavings"
            type="number"
            id="yearly-contribution"
            onChange={formChangeHandler}
            value={investmentForm.yearlySavings}
            required
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            name="expectedInterest"
            type="number"
            id="expected-return"
            onChange={formChangeHandler}
            value={investmentForm.expectedInterest}
            required
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            name="investmentDuration"
            type="number"
            id="duration"
            onChange={formChangeHandler}
            value={investmentForm.investmentDuration}
            required
          />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button
          type="reset"
          onClick={resetHandler}
          className={styles["buttonAlt"]}
        >
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
}

export default InvestmentForm;
