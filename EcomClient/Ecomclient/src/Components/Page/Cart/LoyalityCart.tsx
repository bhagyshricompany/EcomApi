import React, { useState } from "react";

interface LoyaltyCartProps {
  onIncludeLoyalty: (includeLoyalty: boolean) => void;
}

function LoyalityCart({ onIncludeLoyalty }: LoyaltyCartProps) {
  const [includeLoyalty, setIncludeLoyalty] = useState(false);

  const handleToggleLoyalty = () => {
    const newValue = !includeLoyalty;
    setIncludeLoyalty(newValue);
    onIncludeLoyalty(newValue);
  };

  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={includeLoyalty}
          id="loyaltyCheckbox"
          onChange={handleToggleLoyalty}
        />
        <label className="form-check-label" htmlFor="loyaltyCheckbox">
          Include Loyalty Card
        </label>
      </div>
    </div>
  );
}

export default LoyalityCart;
