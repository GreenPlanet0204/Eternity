import React from "react";
import { BridgeIcon, ClaimIcon, CompoundIcon, DepositIcon } from "../../../icons";

const StepList = () => {

  return (
    <div className="step-list">
      <div className="row">
        <div className="step text-center" >
          <BridgeIcon className="step-image"/>
          <div className="step-title">
            Step 1<div className="subtitle">Bridge</div>
          </div>
          <div className="subtext">
            Purchase $CRO from Crypto.com and send it to a Cronos enabled MetaMask
            wallet. Or, use a cross-chain swap application to exchange other
            crypto for $CRO. Cronos currently supports MetaMask and Trust Wallet.
          </div>
        </div>

      <div className="step text-center">
        <div className="dashline" >
          <div className="start circle" />
          <div className="end circle" />
        </div>
        <DepositIcon className="step-image" />
        <div className="step-title">
          Step 2<div className="subtitle">Deposit</div>
        </div>

        <div className="subtext">
          Connect your MetaMask to Eternity Earn and deposit the desired amount
          of $CRO. There is no minimum investment. Deposits, minus a 5% fee are
          locked in the contract and are earned back through the daily $CRO
          rewards.
        </div>
      </div>
      <div className="step text-center" >
        <div className="dashline">
          <div className="start circle" />
          <div className="end circle" />
        </div>
        <CompoundIcon className="step-image" />
        <div className="step-title">
          Step 3<div className="subtitle">Compound</div>
        </div>

        <div className="subtext">
          To grow the amount of $CRO invested in the contract and maximize your
          daily ROI, you can compound (reinvest) your $CRO rewards earned. There
          is no limit to compounding but keep in mind the small gas fee paid for
          each transaction.
        </div>
      </div>
      <div className="step text-center">
        <div className="dashline">
          <div className="start circle" />
          <div className="end circle" />
        </div>
        <ClaimIcon className="step-image" />
        <div className="step-title">
          Step 4<div className="subtitle">Claim</div>
        </div>

        <div className="subtext">
          Once per week, or on a schedult that fits your investment strategy,
          the daily $CRO rewards can be claimed (with-drawn) to your wallet,
          minus a 5% fee. Claiming too often (more than once per week) will
          reduce your daily rewards.
        </div>
      </div>
      </div>
    </div>
  );
};

export default StepList;
