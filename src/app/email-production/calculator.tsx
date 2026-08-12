"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function SavingsCalculator() {
  const [emails, setEmails] = useState(10);
  const [manualCost, setManualCost] = useState(474);
  const [monthlyCost, setMonthlyCost] = useState(250);
  const [setupCost, setSetupCost] = useState(790);

  const result = useMemo(() => {
    const manualMonthly = emails * manualCost;
    const systemFirstMonth = setupCost + monthlyCost;
    const ongoingSavings = Math.max(0, manualMonthly - monthlyCost);
    const firstMonthSavings = manualMonthly - systemFirstMonth;
    return { manualMonthly, systemFirstMonth, ongoingSavings, firstMonthSavings };
  }, [emails, manualCost, monthlyCost, setupCost]);

  return (
    <div className={styles.calculator}>
      <div className={styles.calculatorInputs}>
        <label>
          Emails per month
          <input min="1" max="100" type="number" value={emails} onChange={(event) => setEmails(Number(event.target.value) || 1)} />
        </label>
        <label>
          Current cost per email
          <span className={styles.inputMoney}><b>$</b><input min="0" type="number" value={manualCost} onChange={(event) => setManualCost(Number(event.target.value) || 0)} /></span>
        </label>
        <label>
          Expected monthly plan
          <span className={styles.inputMoney}><b>$</b><input min="0" type="number" value={monthlyCost} onChange={(event) => setMonthlyCost(Number(event.target.value) || 0)} /></span>
        </label>
        <label>
          One-time setup
          <span className={styles.inputMoney}><b>$</b><input min="0" type="number" value={setupCost} onChange={(event) => setSetupCost(Number(event.target.value) || 0)} /></span>
        </label>
      </div>
      <div className={styles.calculatorResults} aria-live="polite">
        <div><span>Current monthly production</span><strong>{money.format(result.manualMonthly)}</strong></div>
        <div><span>System — first month</span><strong>{money.format(result.systemFirstMonth)}</strong></div>
        <div className={styles.resultAccent}><span>Estimated ongoing monthly saving</span><strong>{money.format(result.ongoingSavings)}</strong></div>
        <p>{result.firstMonthSavings >= 0 ? `The setup can pay back in the first month under these assumptions.` : `The remaining first-month investment is ${money.format(Math.abs(result.firstMonthSavings))}.`}</p>
      </div>
      <p className={styles.calculatorNote}>Planning tool only. Replace the assumptions with your real production costs; final plan pricing is agreed during the pilot.</p>
    </div>
  );
}
