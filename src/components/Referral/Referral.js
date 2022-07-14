import React from "react";
import { ClaimCircleIcon, CompoundCircleIcon, DepositCircleIcon, ReferralCircleIcon } from "../../icons";

const ReferralComponent = () => {
  return (
    <div className="referral" id="reward">
      <div className="container">
        <div className="title text-center">
          Referral Rewards and Taxes
        </div>
        <div className="tax-list row">
          <div className="tax">
            <div className="tax-items">
            <ReferralCircleIcon />
            <div className="line" />
            <div className="subtitle">Referral Rewards</div>
            <div className="subtext">By referring another investor, you'll receive 12% of their deposits and compounds, paid from the pool, not the investor.</div>
            </div>
            
          </div>
          <div className="tax">
            <div className="tax-items">
            <DepositCircleIcon />
            <div className="line" />
            <div className="subtitle">Deposit Tax</div>
            <div className="subtext">A 5% tax is paid on deposits of $CRO into the contract. The tax is deposited into the Grand Reserve for development and marketing.</div>
            </div>
            
          </div>
          <div className="tax">
            <div className="tax-items">
            <CompoundCircleIcon />
            <div className="line" />
            <div className="subtitle">Compound Tax</div>
            <div className="subtext">There is no tax paid on compounding available $CRO rewards. A small gas fee is paid for each compound transaction.</div>
            </div>
            
          </div>
          <div className="tax">
            <div className="tax-items">
            <ClaimCircleIcon />
            <div className="line" />
            <div className="subtitle">Claim Tax</div>
            <div className="subtext">A 5% tax is paid on withdrawls of available $CRO rewards. The tax is deposited into the Grand Reserve for development and marketing</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralComponent;