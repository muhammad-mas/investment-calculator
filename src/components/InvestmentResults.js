import React from "react";
import styles from "./InvestmentResults.module.css";

function InvestmentResult(props) {
  const yearlyData = props.yearlyData;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // use like this:
  return yearlyData.length <= 0 ? (
    <div className={`${styles["no-result"]} ${styles["commonResult"]}`}>
      <h1>No Data To Show.</h1>
    </div>
  ) : (
    <table className={`${styles["result"]} ${styles["commonResult"]}`}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.savingsEndOfYear)}</td>
              <td>{formatter.format(data.yearlyInterest)}</td>
              <th>{formatter.format(data.totalInterest)}</th>
              <td>{formatter.format(data.yearlyContribution)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default InvestmentResult;
